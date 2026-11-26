import { pedir, URL_MENSAJERIA } from "./api";

export type EstadoContacto = "PENDIENTE" | "LEIDO" | "RESUELTO";

export interface Contacto {
    id: number;
    nombreCompleto: string;
    correo: string;
    mensaje: string;
    estado: EstadoContacto;
    fechaCreacion: string;
}

const base = `${URL_MENSAJERIA}/api/contactos`;

export const contactosApi = {
    // Público: cualquier visitante puede escribir. Los campos coinciden con la entidad Mensajeria.
    enviar: (nombreCompleto: string, correo: string, mensaje: string) =>
        pedir<Contacto>(base, {
            method: "POST",
            body: JSON.stringify({ nombreCompleto, correo, mensaje }),
        }),

    // Solo ADMIN (el backend responde 403 a un cliente)
    listar: () => pedir<Contacto[]>(base),

    cambiarEstado: (id: number, estado: EstadoContacto) =>
        pedir<Contacto>(`${base}/${id}/estado`, { method: "PUT", body: JSON.stringify({ estado }) }),

    eliminar: (id: number) => pedir<void>(`${base}/${id}`, { method: "DELETE" }),
};
