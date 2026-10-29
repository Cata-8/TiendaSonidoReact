import { expect, test } from "vitest";
import type { DatosUsuario } from "../types/Usuario";
import { esClaveValida, esCorreoValido, esRunValido, validarFormularioUsuario } from "../utils/Validaciones";

const usuarioValido: DatosUsuario = {
    run: "12345678K",
    nombre: "Ana",
    apellidos: "Pérez",
    correo: "ana@correo.cl",
    fechaNacimiento: "",
    rol: "cliente",
    region: "Valparaíso",
    comuna: "Viña del Mar",
    direccion: "Calle 1",
    clave: "1234",
};

test("valida el formato del correo", () => {
    expect(esCorreoValido("usuario@gmail.cl")).toBe(true);
    expect(esCorreoValido("usuario@gmail")).toBe(false);
    expect(esCorreoValido("sin arroba.cl")).toBe(false);
});

test("la clave son exactamente 4 dígitos", () => {
    expect(esClaveValida("1234")).toBe(true);
    expect(esClaveValida("123")).toBe(false);
    expect(esClaveValida("12345")).toBe(false);
    expect(esClaveValida("12a4")).toBe(false);
});

test("valida el RUN sin puntos ni guión", () => {
    expect(esRunValido("12345678K")).toBe(true);
    expect(esRunValido("123456789")).toBe(true);
    expect(esRunValido("1234567k")).toBe(true);
    expect(esRunValido("12.345.678-K")).toBe(false);
    expect(esRunValido("123")).toBe(false);
});

test("un usuario completo es válido", () => {
    expect(validarFormularioUsuario(usuarioValido).valido).toBe(true);
});

test("rechaza datos incompletos con un mensaje", () => {
    const sinNombre = validarFormularioUsuario({ ...usuarioValido, nombre: "  " });
    expect(sinNombre.valido).toBe(false);
    expect(sinNombre.mensaje).toBe("Debe ingresar su nombre");

    const sinTipo = validarFormularioUsuario({ ...usuarioValido, rol: "" as DatosUsuario["rol"] });
    expect(sinTipo.valido).toBe(false);
    expect(sinTipo.mensaje).toBe("Seleccione el tipo de usuario");

    expect(validarFormularioUsuario({ ...usuarioValido, run: "abc" }).valido).toBe(false);
    expect(validarFormularioUsuario({ ...usuarioValido, correo: "malo" }).valido).toBe(false);
});
