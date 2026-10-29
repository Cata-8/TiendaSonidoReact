/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";

import CardProducto from "../components/molecules/CardProducto";

test("muestra la información del producto y el botón Ver Detalle", () => {
    render(
        <MemoryRouter>
            <CardProducto
                id="GA001"
                marca="Yamaha"
                titulo="Guitarra Acústica Folk"
                precio={129990}
                imagen="/img/Guitarra_Acustica_Folk_Yamaha.jpg"
            />
        </MemoryRouter>
    );

    expect(
        screen.getByText("Yamaha")
    ).toBeInTheDocument();

    expect(
        screen.getByText("Guitarra Acústica Folk")
    ).toBeInTheDocument();

    expect(
        screen.getByRole("img", { name: "Guitarra Acústica Folk" })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("link", { name: /ver detalle/i })
    ).toBeInTheDocument();
});