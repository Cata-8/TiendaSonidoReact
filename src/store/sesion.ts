import type { Usuario } from "../types/Usuario";
import { crearStore, useStore } from "./CrearStore";
import { usuariosStore } from "./Usuarios";

// Guarda solo el id del usuario con sesión iniciada.
// El origen no tenía sesión real: login.js redirigía según credenciales fijas.
export const sesionStore = crearStore<number | null>("sesion", () => null);

export function iniciarSesion(correo: string, clave: string): Usuario | null {
    const usuario = usuariosStore
        .obtener()
        .find((u) => u.correo === correo.trim() && u.clave === clave);

    if (!usuario) return null;

    sesionStore.guardar(usuario.id);
    return usuario;
}

export function cerrarSesion() {
    sesionStore.guardar(null);
}

export function useSesion() {
    const id = useStore(sesionStore);
    const usuarios = useStore(usuariosStore);
    const usuario = id === null ? null : (usuarios.find((u) => u.id === id) ?? null);

    return { usuario, iniciarSesion, cerrarSesion };
}
