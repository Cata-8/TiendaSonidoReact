/* @vitest-environment jsdom */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import DetalleProducto from "../paginas/DetalleProducto";

test("se muestra la página de detalle del producto", () => {
    const { container } = render(
        <MemoryRouter>
            <DetalleProducto />
        </MemoryRouter>
    );

    expect(container.firstChild).toBeInTheDocument();
});