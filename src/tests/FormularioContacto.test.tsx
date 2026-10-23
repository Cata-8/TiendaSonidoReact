// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import FormularioContacto from "../components/organismos/FormularioContacto";

test("muestra una alerta cuando el nombre está vacío", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<FormularioContacto />);

    fireEvent.click(
        screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(alerta).toHaveBeenCalledWith("Debe ingresar su nombre");

    alerta.mockRestore();
});