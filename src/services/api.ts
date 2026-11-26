// Cliente HTTP común para hablar con los microservicios de Spring Boot.
// Las URLs se pueden cambiar en el archivo .env (ver .env.example); si no existe, se usan las de localhost.

export const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS ?? "http://localhost:8081";
export const URL_MENSAJERIA = import.meta.env.VITE_API_MENSAJERIA ?? "http://localhost:8082";
export const URL_CATALOGO = import.meta.env.VITE_API_CATALOGO ?? "http://localhost:8083";
export const URL_COMPRAS = import.meta.env.VITE_API_COMPRAS ?? "http://localhost:8084";

// Error con el mensaje que devolvió el backend (ej: "Ya existe una cuenta registrada con ese correo")
export class ErrorApi extends Error {
    estado: number;

    constructor(mensaje: string, estado: number) {
        super(mensaje);
        this.estado = estado;
    }
}

// --- Autenticación -----------------------------------------------------------------------------
// api.ts no conoce el store de sesión (evita imports circulares): store/sesion.ts le entrega, al iniciar,
// cómo obtener el token JWT vigente y qué hacer cuando el servidor responde 401 (sesión vencida).
interface Autenticacion {
    obtenerToken: () => string | undefined;
    alNoAutorizado: () => void;
}

let autenticacion: Autenticacion = { obtenerToken: () => undefined, alNoAutorizado: () => {} };

export function configurarAutenticacion(nueva: Autenticacion) {
    autenticacion = nueva;
}

// Spring responde { status, error, message, errors? }. Se rescata el texto más útil para mostrarlo.
// Los 401/403 que genera Spring Security vienen sin cuerpo, así que tienen mensaje propio.
async function leerMensajeError(respuesta: Response): Promise<string> {
    try {
        const cuerpo = await respuesta.json();
        const primerError = cuerpo?.errors?.[0]?.defaultMessage; // errores de @Valid
        const mensaje = primerError || cuerpo?.message || cuerpo?.error;
        if (mensaje) return mensaje;
    } catch {
        // sin cuerpo JSON
    }

    if (respuesta.status === 401) return "Tu sesión expiró o no es válida. Vuelve a iniciar sesión.";
    if (respuesta.status === 403) return "No tienes permisos para realizar esta acción.";
    return `Error ${respuesta.status}`;
}

// conToken = false solo en el login: ahí todavía no hay (o no debe enviarse) un token
export async function pedir<T>(url: string, opciones: RequestInit = {}, conToken = true): Promise<T> {
    let respuesta: Response;
    const token = conToken ? autenticacion.obtenerToken() : undefined;

    try {
        respuesta = await fetch(url, {
            ...opciones,
            headers: {
                "Content-Type": "application/json",
                // Así el backend sabe quién eres y con qué rol: Authorization: Bearer <token>
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
                ...opciones.headers,
            },
        });
    } catch {
        // fetch solo falla así cuando no hay conexión con el servidor (microservicio apagado, CORS, etc.)
        throw new ErrorApi("No se pudo conectar con el servidor. Revisa que los microservicios estén encendidos.", 0);
    }

    if (!respuesta.ok) {
        // 401 con token enviado = el token venció o es inválido: se cierra la sesión
        if (respuesta.status === 401 && token) autenticacion.alNoAutorizado();
        throw new ErrorApi(await leerMensajeError(respuesta), respuesta.status);
    }

    // 204 No Content (DELETE, descontar-stock): no hay cuerpo que leer
    if (respuesta.status === 204) return undefined as T;

    return (await respuesta.json()) as T;
}

export const mensajeDeError = (e: unknown): string =>
    e instanceof Error ? e.message : "Ocurrió un error inesperado";
