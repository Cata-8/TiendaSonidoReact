import type { DatosUsuario } from "../types/usuario";

export const esCorreoValido = (correo: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

// La clave del sitio son 4 dígitos (login.js / registro.js / admin_editar_user.js)
export const esClaveValida = (clave: string): boolean => /^\d{4}$/.test(clave);

// RUN sin puntos ni guión: 7 u 8 dígitos + dígito verificador (máx. 9 caracteres). Ej: 12345678K
export const esRunValido = (run: string): boolean => /^\d{7,8}[\dkK]$/.test(run);

export interface ResultadoValidacion {
    valido: boolean;
    mensaje: string;
}

// El origen llamaba a validarFormularioUsuario() pero nunca la definió.
// Se implementa según los límites (maxlength) y campos obligatorios de los formularios HTML.
export function validarFormularioUsuario(datos: DatosUsuario): ResultadoValidacion {
    const ok = { valido: true, mensaje: "" };
    const error = (mensaje: string) => ({ valido: false, mensaje });

    if (!esRunValido(datos.run.trim())) {
        return error("Ingrese un RUN válido, sin puntos ni guión (ej: 12345678K)");
    }
    if (datos.nombre.trim() === "") return error("Debe ingresar su nombre");
    if (datos.nombre.length > 50) return error("El nombre no puede superar los 50 caracteres");

    if (datos.apellidos.trim() === "") return error("Debe ingresar sus apellidos");
    if (datos.apellidos.length > 100) return error("Los apellidos no pueden superar los 100 caracteres");

    if (datos.correo.trim() === "") return error("Debe ingresar su correo");
    if (!esCorreoValido(datos.correo.trim())) return error("Ingrese un correo válido");
    if (datos.correo.length > 100) return error("El correo no puede superar los 100 caracteres");

    if (datos.rol !== "admin" && datos.rol !== "cliente") {
        return error("Seleccione el tipo de usuario");
    }
    if (datos.region.trim() === "") return error("Debe ingresar la región");
    if (datos.comuna.trim() === "") return error("Debe ingresar la comuna");

    if (datos.direccion.trim() === "") return error("Debe ingresar la dirección");
    if (datos.direccion.length > 300) return error("La dirección no puede superar los 300 caracteres");

    return ok;
}
