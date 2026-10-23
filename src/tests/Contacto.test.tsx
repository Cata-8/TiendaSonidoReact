// @vitest-environment jsdom

import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Contacto from "../paginas/Contacto";

test("El componente Contacto contiene las clases responsivas de Bootstrap", () => {
    const { container } = render(<Contacto />);
    const columna = container.querySelector(".col-12");

    expect(columna?.classList.contains("col-12")).toBe(true);
    expect(columna?.classList.contains("col-md-8")).toBe(true);
    expect(columna?.classList.contains("col-lg-6")).toBe(true);
});