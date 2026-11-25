import { pedir, URL_MENSAJERIA } from "./api";

export const contactosApi = {
    // Los nombres de los campos coinciden con la entidad Mensajeria del backend
    enviar: (nombreCompleto: string, correo: string, mensaje: string) =>
        pedir<unknown>(`${URL_MENSAJERIA}/api/contactos`, {
            method: "POST",
            body: JSON.stringify({ nombreCompleto, correo, mensaje }),
        }),
};
