/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import FormularioLogin from "../components/organismos/FormularioLogin";

test("muestra el botón ingresar", () => {
    render(
        <MemoryRouter>
            <FormularioLogin />
        </MemoryRouter>
    );

    expect(
        screen.getByRole("button", { name: /INGRESAR/i })
    ).toBeInTheDocument();
});