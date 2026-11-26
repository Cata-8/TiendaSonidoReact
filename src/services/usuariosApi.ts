import type { DatosUsuario, Usuario } from "../types/usuario";
import { pedir, URL_USUARIOS } from "./api";

const base = `${URL_USUARIOS}/api/usuarios`;

// Respuesta del login: el token JWT y los datos del usuario (sin clave)
export interface LoginRespuesta {
    token: string;
    usuario: Usuario;
}

export const usuariosApi = {
    listar: () => pedir<Usuario[]>(base),

    crear: (datos: DatosUsuario) =>
        pedir<Usuario>(base, { method: "POST", body: JSON.stringify(datos) }),

    // Si "clave" va vacía, el backend conserva la clave actual
    actualizar: (id: number, datos: DatosUsuario) =>
        pedir<Usuario>(`${base}/${id}`, { method: "PUT", body: JSON.stringify(datos) }),

    eliminar: (id: number) => pedir<void>(`${base}/${id}`, { method: "DELETE" }),

    // 401 si correo/clave son incorrectos. Sin token: todavía no hay sesión.
    login: (correo: string, clave: string) =>
        pedir<LoginRespuesta>(
            `${base}/login`,
            { method: "POST", body: JSON.stringify({ correo, clave }) },
            false
        ),
};
