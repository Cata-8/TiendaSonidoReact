/* @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import BotonVolver from "../components/atoms/BotonVolver";

test("debe tener el enlace correcto para volver al catálogo", () => {
    render(
      <MemoryRouter>
        <BotonVolver />
      </MemoryRouter>
    );

    const boton = screen.getByRole("link", {
      name: /volver al catálogo/i,
    });

    expect(boton).toBeInTheDocument();
    expect(boton).toHaveAttribute("href", "/productos");
  });
