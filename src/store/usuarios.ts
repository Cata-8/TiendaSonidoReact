import { mensajeDeError } from "../services/api";
import { usuariosApi } from "../services/usuariosApi";
import type { DatosUsuario, Usuario } from "../types/usuario";
import { crearStore, useStore } from "./CrearStore";
import { sesionStore } from "./sesion";
import { useEffect } from "react";

// La fuente de verdad es el microservicio de usuarios (puerto 8081).
export const usuariosStore = crearStore<Usuario[]>("usuarios", () => [], false);

interface EstadoCarga {
    cargado: boolean;
    cargando: boolean;
    error: string;
}

const estadoStore = crearStore<EstadoCarga>(
    "usuariosEstado",
    () => ({ cargado: false, cargando: false, error: "" }),
    false
);

export async function cargarUsuarios(): Promise<void> {
    if (estadoStore.obtener().cargando) return;

    estadoStore.guardar({ cargado: estadoStore.obtener().cargado, cargando: true, error: "" });
    try {
        usuariosStore.guardar(await usuariosApi.listar());
        estadoStore.guardar({ cargado: true, cargando: false, error: "" });
    } catch (e) {
        estadoStore.guardar({ cargado: false, cargando: false, error: mensajeDeError(e) });
    }
}

// cargarLista = true solo en el panel admin: el registro público no necesita (ni debe pedir) todos los usuarios.
export function useUsuarios(cargarLista = false) {
    const usuarios = useStore(usuariosStore);
    const estado = useStore(estadoStore);

    useEffect(() => {
        const actual = estadoStore.obtener();
        if (cargarLista && !actual.cargado && !actual.cargando && actual.error === "") {
            void cargarUsuarios();
        }
    }, [cargarLista]);

    return {
        usuarios,
        cargado: estado.cargado,
        cargando: estado.cargando,
        error: estado.error,
        recargar: cargarUsuarios,
        buscar: (id: number) => usuarios.find((u) => u.id === id),

        // Lanzan ErrorApi si el backend rechaza la operación (409 correo/RUN repetido, 400 datos inválidos...)
        crear: async (datos: DatosUsuario): Promise<Usuario> => {
            const creado = await usuariosApi.crear(datos);
            usuariosStore.guardar([...usuariosStore.obtener(), creado]);
            return creado;
        },
        actualizar: async (id: number, datos: DatosUsuario): Promise<void> => {
            const guardado = await usuariosApi.actualizar(id, datos);
            usuariosStore.guardar(usuariosStore.obtener().map((u) => (u.id === id ? guardado : u)));

            // Si el admin se editó a sí mismo, se refresca también la sesión
            const sesion = sesionStore.obtener();
            if (sesion?.usuario.id === id) sesionStore.guardar({ ...sesion, usuario: guardado });
        },
        eliminar: async (id: number): Promise<void> => {
            await usuariosApi.eliminar(id);
            usuariosStore.guardar(usuariosStore.obtener().filter((u) => u.id !== id));
        },
    };
}
