/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import QuienesSomos from "../paginas/QuienesSomos";

test("muestra el título de la página", () => {
    render(<QuienesSomos />);

    expect(
        screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
});