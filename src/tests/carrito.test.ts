import { expect, test } from "vitest";
import type { ItemCarrito, Producto } from "../types/producto";
import {
    agregarItem, calcularTotal, cambiarCantidadItem, contarUnidades, eliminarItem,
} from "../utils/carrito";
import { formatearPrecio } from "../utils/formato";

const guitarra: Producto = {
    codigo: "GA001", categoria: "Guitarras Acústicas", nombre: "Guitarra Acústica Folk",
    marca: "Yamaha", modelo: "F310", stock: 8, precio: 129990,
    descripcion: "x", imagen: "/img/a.jpg",
};
const bajo: Producto = { ...guitarra, codigo: "BA001", nombre: "Bajo", precio: 299990 };

test("agregar un producto nuevo lo deja con cantidad 1", () => {
    const items = agregarItem([], guitarra);
    expect(items).toHaveLength(1);
    expect(items[0].cantidad).toBe(1);
    expect(items[0].codigo).toBe("GA001");
});

test("agregar el mismo producto suma la cantidad (no duplica la fila)", () => {
    const items = agregarItem(agregarItem([], guitarra), guitarra);
    expect(items).toHaveLength(1);
    expect(items[0].cantidad).toBe(2);
});

test("cambiar cantidad suma/resta y elimina cuando llega a 0", () => {
    let items: ItemCarrito[] = agregarItem([], guitarra);
    items = cambiarCantidadItem(items, "GA001", 1);
    expect(items[0].cantidad).toBe(2);
    items = cambiarCantidadItem(items, "GA001", -1);
    items = cambiarCantidadItem(items, "GA001", -1);
    expect(items).toHaveLength(0);
});

test("no muta la lista original", () => {
    const original = agregarItem([], guitarra);
    cambiarCantidadItem(original, "GA001", 5);
    expect(original[0].cantidad).toBe(1);
});

test("eliminar, contar unidades y total", () => {
    let items = agregarItem(agregarItem(agregarItem([], guitarra), guitarra), bajo);
    expect(contarUnidades(items)).toBe(3);
    expect(calcularTotal(items)).toBe(129990 * 2 + 299990);
    items = eliminarItem(items, "GA001");
    expect(items.map((i) => i.codigo)).toEqual(["BA001"]);
});

test("formatea el precio en pesos chilenos", () => {
    expect(formatearPrecio(129990)).toBe("$129.990");
});
