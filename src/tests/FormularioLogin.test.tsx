/* @vitest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import FormularioLogin from "../components/organismos/FormularioLogin";

test("muestra una alerta cuando faltan campos", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
        <MemoryRouter>
            <FormularioLogin />
        </MemoryRouter>
    );

    fireEvent.click(
        screen.getByRole("button", { name: /INGRESAR/i })
    );

    expect(alerta).toHaveBeenCalledWith("Debe completar todos los campos");

    alerta.mockRestore();
});