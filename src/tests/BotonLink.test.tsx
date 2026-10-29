/* @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Boton from "../components/atoms/Boton";
import "@testing-library/jest-dom/vitest";

test("debe tener el enlace correcto al hacer clic en Ver Detalle", () => {
    render(
      <MemoryRouter>
        <Boton id="GA003" />
      </MemoryRouter>
    );

    const boton = screen.getByRole("link", {
      name: /ver detalle/i,
    });

    expect(boton).toBeInTheDocument();
    expect(boton).toHaveAttribute("href", "/producto/GA003");
  });
