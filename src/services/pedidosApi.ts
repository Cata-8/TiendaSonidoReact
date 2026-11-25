import type { ItemCarrito } from "../types/Producto";
import { pedir, URL_COMPRAS } from "./api";

const base = `${URL_COMPRAS}/api/pedidos`;

export interface DetallePedido {
    codigo: string;
    nombre: string;
    precioUnitario: number;
    cantidad: number;
    subtotal: number;
}

export interface PedidoCreado {
    id: number;
    numero: string;
    usuarioId: number | null;
    total: number;
    unidades: number;
    estado: string;
    fecha: string;
    items: DetallePedido[];
}

export const pedidosApi = {
    // El precio NO se envía: el servidor lo toma del catálogo
    crear: (usuarioId: number | null, items: ItemCarrito[]) =>
        pedir<PedidoCreado>(base, {
            method: "POST",
            body: JSON.stringify({
                usuarioId,
                items: items.map((i) => ({ codigo: i.codigo, cantidad: i.cantidad })),
            }),
        }),

    deUsuario: (usuarioId: number) => pedir<PedidoCreado[]>(`${base}?usuarioId=${usuarioId}`),
};
