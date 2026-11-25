import type { DatosUsuario, Usuario } from "../types/Usuario";
import { pedir, URL_USUARIOS } from "./api";

const base = `${URL_USUARIOS}/api/usuarios`;

export const usuariosApi = {
    listar: () => pedir<Usuario[]>(base),

    crear: (datos: DatosUsuario) =>
        pedir<Usuario>(base, { method: "POST", body: JSON.stringify(datos) }),

    // Si "clave" va vacía, el backend conserva la clave actual
    actualizar: (id: number, datos: DatosUsuario) =>
        pedir<Usuario>(`${base}/${id}`, { method: "PUT", body: JSON.stringify(datos) }),

    eliminar: (id: number) => pedir<void>(`${base}/${id}`, { method: "DELETE" }),

    // 401 si correo/clave son incorrectos
    login: (correo: string, clave: string) =>
        pedir<Usuario>(`${base}/login`, { method: "POST", body: JSON.stringify({ correo, clave }) }),
};
