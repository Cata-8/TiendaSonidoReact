import type { ItemCarrito, Producto } from "../types/producto";
import {
    agregarItem,
    calcularTotal,
    cambiarCantidadItem,
    contarUnidades,
    eliminarItem,
} from "../utils/carrito";
import { crearStore, useStore } from "./crearStore";

// Misma clave que usaba el origen ("carrito")
export const carritoStore = crearStore<ItemCarrito[]>("carrito", () => []);

export function useCarrito() {
    const items = useStore(carritoStore);

    return {
        items,
        totalUnidades: contarUnidades(items),
        total: calcularTotal(items),
        agregar: (producto: Producto) =>
            carritoStore.guardar(agregarItem(carritoStore.obtener(), producto)),
        cambiarCantidad: (codigo: string, delta: number) =>
            carritoStore.guardar(cambiarCantidadItem(carritoStore.obtener(), codigo, delta)),
        eliminar: (codigo: string) =>
            carritoStore.guardar(eliminarItem(carritoStore.obtener(), codigo)),
        vaciar: () => carritoStore.guardar([]),
    };
}
