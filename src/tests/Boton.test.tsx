// @vitest-environment jsdom
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Boton from "../components/atoms/Boton";


test("el botón muestra el texto Ver Detalle", () => {

    render(
        <MemoryRouter>
            <Boton id = "GA003" />
        </MemoryRouter>
    );

    const boton = screen.getByText("Ver Detalle");

    expect(boton.textContent).toBe("Ver Detalle");
});