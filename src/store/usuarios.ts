import { usuariosBase } from "../data/usuariosBase";
import type { DatosUsuario, Usuario } from "../types/usuario";
import { crearStore, useStore } from "./crearStore";

// Misma clave que usaba el origen ("usuarios")
export const usuariosStore = crearStore<Usuario[]>("usuarios", () => usuariosBase);

export const correoRepetido = (usuarios: Usuario[], correo: string, ignorarId?: number): boolean =>
    usuarios.some((u) => u.correo === correo && u.id !== ignorarId);

export const runRepetido = (usuarios: Usuario[], run: string, ignorarId?: number): boolean =>
    run !== "" && usuarios.some((u) => u.run === run && u.id !== ignorarId);

export function useUsuarios() {
    const usuarios = useStore(usuariosStore);

    return {
        usuarios,
        buscar: (id: number) => usuarios.find((u) => u.id === id),

        crear: (datos: DatosUsuario): Usuario => {
            const actuales = usuariosStore.obtener();
            const id = actuales.reduce((max, u) => Math.max(max, u.id), 0) + 1;
            const nuevo: Usuario = { ...datos, id };
            usuariosStore.guardar([...actuales, nuevo]);
            return nuevo;
        },
        actualizar: (usuario: Usuario) =>
            usuariosStore.guardar(
                usuariosStore.obtener().map((u) => (u.id === usuario.id ? usuario : u))
            ),
        eliminar: (id: number) =>
            usuariosStore.guardar(usuariosStore.obtener().filter((u) => u.id !== id)),
    };
}
