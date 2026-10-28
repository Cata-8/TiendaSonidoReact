// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, expect, test, vi } from "vitest";

import FormularioLogin from "../components/organismos/FormularioLogin";
import { sesionStore } from "../store/sesion";

function renderizar() {
    return render(
        <MemoryRouter initialEntries={["/login"]}>
            <Routes>
                <Route path="/login" element={<FormularioLogin />} />
                <Route path="/usuario" element={<div>PAGINA CLIENTE</div>} />
                <Route path="/admin" element={<div>PAGINA ADMIN</div>} />
            </Routes>
        </MemoryRouter>
    );
}

function escribir(nombre: string, valor: string) {
    const campo = document.querySelector(`input[name="${nombre}"]`) as HTMLInputElement;
    fireEvent.change(campo, { target: { value: valor } });
}

// vitest sin "globals" no limpia el DOM solo: se hace a mano entre tests
afterEach(() => {
    cleanup();
    sesionStore.restablecer();
});

test("avisa cuando faltan campos", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderizar();

    fireEvent.click(screen.getByRole("button", { name: "INGRESAR" }));

    expect(alerta).toHaveBeenCalledWith("Debe completar todos los campos");
    alerta.mockRestore();
});

test("rechaza credenciales incorrectas", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    renderizar();

    escribir("correo", "usuario@gmail.cl");
    escribir("clave", "0000");
    fireEvent.click(screen.getByRole("button", { name: "INGRESAR" }));

    expect(alerta).toHaveBeenCalledWith("Correo o clave incorrectos");
    alerta.mockRestore();
});

test("el cliente entra a su cuenta y el administrador al panel", () => {
    renderizar();
    escribir("correo", "usuario@gmail.cl");
    escribir("clave", "5678");
    fireEvent.click(screen.getByRole("button", { name: "INGRESAR" }));
    expect(screen.getByText("PAGINA CLIENTE")).toBeTruthy();
});

test("el administrador va al panel", () => {
    renderizar();
    escribir("correo", "sonidovivo@gmail.cl");
    escribir("clave", "1234");
    fireEvent.click(screen.getByRole("button", { name: "INGRESAR" }));
    expect(screen.getByText("PAGINA ADMIN")).toBeTruthy();
});
