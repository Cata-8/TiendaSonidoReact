import type { Producto } from "../types/Producto";
import { pedir, URL_CATALOGO } from "./api";

const base = `${URL_CATALOGO}/api/productos`;

export const productosApi = {
    listar: () => pedir<Producto[]>(base),

    crear: (producto: Producto) =>
        pedir<Producto>(base, { method: "POST", body: JSON.stringify(producto) }),

    // El código va en la URL y no se puede cambiar
    actualizar: (producto: Producto) =>
        pedir<Producto>(`${base}/${encodeURIComponent(producto.codigo)}`, {
            method: "PUT",
            body: JSON.stringify(producto),
        }),

    eliminar: (codigo: string) =>
        pedir<void>(`${base}/${encodeURIComponent(codigo)}`, { method: "DELETE" }),
};
