import type { ItemCarrito } from "../../types/Producto";
import { formatearPrecio } from "../../utils/Formato";

interface FilaCarritoProps{
    item: ItemCarrito;
    alCambiarCantidad: (codigo: string, delta: number) => void;
    alEliminar: (codigo: string) => void;
}

function FilaCarrito({ item, alCambiarCantidad, alEliminar }: FilaCarritoProps) {
    return(
        <div className="carrito-item-card">
            <img src={item.imagen} className="carrito-item-img" alt={item.nombre} />

            <div className="carrito-item-info">
                <p className="carrito-item-nombre">{item.nombre}</p>
                <p className="carrito-item-marca">
                    {item.marca}{item.modelo ? " - " + item.modelo : ""}
                </p>
                <p className="carrito-item-precio">{formatearPrecio(item.precio)}</p>
            </div>

            <div className="cantidad-control">
                <button
                    type="button"
                    aria-label="Disminuir cantidad"
                    onClick={() => alCambiarCantidad(item.codigo, -1)}
                >
                    −
                </button>

                <input type="text" value={item.cantidad} readOnly />

                <button
                    type="button"
                    aria-label="Aumentar cantidad"
                    onClick={() => alCambiarCantidad(item.codigo, 1)}
                >
                    +
                </button>
            </div>

            <button
                type="button"
                className="carrito-item-eliminar"
                onClick={() => alEliminar(item.codigo)}
            >
                <i className="bi bi-trash"></i> Eliminar
            </button>
        </div>
    )
}

export default FilaCarrito;
