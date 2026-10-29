/* @vitest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi } from "vitest";

import FormularioRegistro from "../components/organismos/FormularioRegistro";

test("muestra una alerta cuando faltan campos", () => {
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
        <MemoryRouter>
            <FormularioRegistro />
        </MemoryRouter>
    );

    fireEvent.click(
        screen.getByRole("button", { name: "REGISTRARME" })
    );

    expect(alerta).toHaveBeenCalled();

    alerta.mockRestore();
});