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

// Spring responde { status, error, message, errors? }. Se rescata el texto más útil para mostrarlo.
async function leerMensajeError(respuesta: Response): Promise<string> {
    try {
        const cuerpo = await respuesta.json();
        const primerError = cuerpo?.errors?.[0]?.defaultMessage; // errores de @Valid
        return primerError || cuerpo?.message || cuerpo?.error || `Error ${respuesta.status}`;
    } catch {
        return `Error ${respuesta.status}`;
    }
}

export async function pedir<T>(url: string, opciones: RequestInit = {}): Promise<T> {
    let respuesta: Response;

    try {
        respuesta = await fetch(url, {
            ...opciones,
            headers: { "Content-Type": "application/json", ...opciones.headers },
        });
    } catch {
        // fetch solo falla así cuando no hay conexión con el servidor (microservicio apagado, CORS, etc.)
        throw new ErrorApi("No se pudo conectar con el servidor. Revisa que los microservicios estén encendidos.", 0);
    }

    if (!respuesta.ok) {
        throw new ErrorApi(await leerMensajeError(respuesta), respuesta.status);
    }

    // 204 No Content (DELETE, descontar-stock): no hay cuerpo que leer
    if (respuesta.status === 204) return undefined as T;

    return (await respuesta.json()) as T;
}

export const mensajeDeError = (e: unknown): string =>
    e instanceof Error ? e.message : "Ocurrió un error inesperado";
