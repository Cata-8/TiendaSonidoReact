import type { ItemCarrito, Producto } from "../types/Producto";

// Funciones puras sobre la lista del carrito (la lógica que estaba en detalle.js y carrito.js)

export function agregarItem(items: ItemCarrito[], producto: Producto): ItemCarrito[] {
    const existente = items.find((item) => item.codigo === producto.codigo);

    if (existente) {
        return items.map((item) =>
            item.codigo === producto.codigo ? { ...item, cantidad: item.cantidad + 1 } : item
        );
    }

    return [
        ...items,
        {
            codigo: producto.codigo,
            nombre: producto.nombre,
            marca: producto.marca,
            modelo: producto.modelo,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1,
        },
    ];
}

// Si la cantidad llega a 0 (o menos) el ítem se elimina, como en cambiarCantidad() del origen
export function cambiarCantidadItem(items: ItemCarrito[], codigo: string, delta: number): ItemCarrito[] {
    return items
        .map((item) => (item.codigo === codigo ? { ...item, cantidad: item.cantidad + delta } : item))
        .filter((item) => item.cantidad > 0);
}

export function eliminarItem(items: ItemCarrito[], codigo: string): ItemCarrito[] {
    return items.filter((item) => item.codigo !== codigo);
}

export const contarUnidades = (items: ItemCarrito[]): number =>
    items.reduce((acc, item) => acc + item.cantidad, 0);

export const calcularTotal = (items: ItemCarrito[]): number =>
    items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
