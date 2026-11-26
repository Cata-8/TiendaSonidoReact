import { configurarAutenticacion } from "../services/api";
import { usuariosApi } from "../services/usuariosApi";
import type { Usuario } from "../types/usuario";
import { crearStore, useStore } from "./CrearStore";

// Sesión del usuario: el token JWT (lo que prueba quién eres ante el backend) y sus datos (sin clave).
// Se guarda en localStorage para que sobreviva a recargar la página.
// Clave nueva ("sesionJwt"): antes se guardaba solo el id del usuario.
export interface Sesion {
    token: string;
    usuario: Usuario;
}

export const sesionStore = crearStore<Sesion | null>("sesionJwt", () => null);

// El token es "cabecera.contenido.firma". El contenido es JSON en base64 y trae "exp" (segundos).
// Solo se lee para saber cuándo vence; la validez real la comprueba el backend con la firma.
function expiracionDe(token: string): number | null {
    try {
        const contenido = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        const exp = JSON.parse(atob(contenido)).exp;
        return typeof exp === "number" ? exp * 1000 : null;
    } catch {
        return null;
    }
}

// Devuelve la sesión solo si el token no ha vencido; si venció, la cierra.
export function sesionVigente(): Sesion | null {
    const sesion = sesionStore.obtener();
    if (!sesion) return null;

    const vence = expiracionDe(sesion.token);
    if (vence !== null && vence <= Date.now()) {
        cerrarSesion();
        return null;
    }
    return sesion;
}

// Cierra la sesión sola cuando el token vence, aunque la persona no haga nada
let temporizador: ReturnType<typeof setTimeout> | undefined;

function programarExpiracion() {
    clearTimeout(temporizador);

    const sesion = sesionStore.obtener();
    const vence = sesion ? expiracionDe(sesion.token) : null;
    if (vence === null) return;

    temporizador = setTimeout(() => {
        if (sesionVigente() === null) alert("Tu sesión expiró. Inicia sesión nuevamente.");
    }, Math.max(vence - Date.now(), 0) + 500);
}

// Lanza ErrorApi (401: "Correo o clave incorrectos") si las credenciales no sirven
export async function iniciarSesion(correo: string, clave: string): Promise<Usuario> {
    const { token, usuario } = await usuariosApi.login(correo.trim(), clave);
    sesionStore.guardar({ token, usuario });
    programarExpiracion();
    return usuario;
}

export function cerrarSesion() {
    clearTimeout(temporizador);
    sesionStore.guardar(null);
}

// Le dice a la capa de servicios cómo obtener el token y qué hacer si el backend responde 401
configurarAutenticacion({
    obtenerToken: () => sesionVigente()?.token,
    alNoAutorizado: cerrarSesion,
});

// Si había una sesión guardada de una visita anterior: se descarta si ya venció, o se vuelve a programar
if (sesionVigente()) programarExpiracion();

export function useSesion() {
    const sesion = useStore(sesionStore);
    const usuario = sesion?.usuario ?? null;

    return {
        usuario,
        esAdmin: usuario?.rol === "admin",
        iniciarSesion,
        cerrarSesion,
    };
}
