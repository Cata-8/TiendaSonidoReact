import { usuariosApi } from "../services/usuariosApi";
import type { Usuario } from "../types/Usuario";
import { crearStore, useStore } from "./CrearStore";

// Guarda el usuario que devolvió el backend al iniciar sesión (nunca incluye la clave).
// Se usa otra clave de localStorage ("sesionUsuario") porque antes se guardaba solo el id.
// OJO: es una sesión "de cara al front": no hay token. Ver notas de seguridad en la guía.
export const sesionStore = crearStore<Usuario | null>("sesionUsuario", () => null);

// Lanza ErrorApi (401: "Correo o clave incorrectos") si las credenciales no sirven
export async function iniciarSesion(correo: string, clave: string): Promise<Usuario> {
    const usuario = await usuariosApi.login(correo.trim(), clave);
    sesionStore.guardar(usuario);
    return usuario;
}

export function cerrarSesion() {
    sesionStore.guardar(null);
}

export function useSesion() {
    const usuario = useStore(sesionStore);
    return { usuario, iniciarSesion, cerrarSesion };
}
