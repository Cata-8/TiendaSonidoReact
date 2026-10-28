import { catalogo } from "../data/catalogo";
import type { Producto } from "../types/producto";
import { crearStore, useStore } from "./crearStore";

// Misma clave que usaba el origen en el panel admin ("productosAdmin").
// Ahora es la fuente única: lo que se edita en el admin se ve en el catálogo público.
export const productosStore = crearStore<Producto[]>("productosAdmin", () => catalogo);

export function useProductos() {
    const productos = useStore(productosStore);

    return {
        productos,
        buscar: (codigo: string) => productos.find((p) => p.codigo === codigo),

        // false si ya existe un producto con ese código
        crear: (producto: Producto): boolean => {
            const actuales = productosStore.obtener();
            if (actuales.some((p) => p.codigo === producto.codigo)) return false;
            productosStore.guardar([...actuales, producto]);
            return true;
        },
        actualizar: (producto: Producto) =>
            productosStore.guardar(
                productosStore.obtener().map((p) => (p.codigo === producto.codigo ? producto : p))
            ),
        eliminar: (codigo: string) =>
            productosStore.guardar(productosStore.obtener().filter((p) => p.codigo !== codigo)),
    };
}
