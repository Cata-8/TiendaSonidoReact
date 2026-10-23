// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test} from "vitest";
import BotonVolver from "../components/atoms/BotonVolver";

test("el botón muestra el texto Volver al Catálogo", () => {
    render(
      <MemoryRouter>
        <BotonVolver />
      </MemoryRouter>
    );

    const boton = screen.getByText("Volver al Catálogo");

    expect(boton.textContent).toBe("Volver al Catálogo");
});