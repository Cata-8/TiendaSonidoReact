import type { ItemCarrito } from "../types/producto";
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
    // Ni el precio ni el comprador se envían: el servidor toma el precio del catálogo
    // y el comprador del token JWT.
    crear: (items: ItemCarrito[]) =>
        pedir<PedidoCreado>(base, {
            method: "POST",
            body: JSON.stringify({
                items: items.map((i) => ({ codigo: i.codigo, cantidad: i.cantidad })),
            }),
        }),

    deUsuario: (usuarioId: number) => pedir<PedidoCreado[]>(`${base}?usuarioId=${usuarioId}`),
};
