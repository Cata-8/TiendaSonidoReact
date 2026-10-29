/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import FormularioRegistro from "../components/organismos/FormularioRegistro";

test("muestra el botón registrarme", () => {
    render(
        <MemoryRouter>
            <FormularioRegistro />
        </MemoryRouter>
    );

    expect(
        screen.getByRole("button", { name: /REGISTRARME/i })
    ).toBeInTheDocument();
});