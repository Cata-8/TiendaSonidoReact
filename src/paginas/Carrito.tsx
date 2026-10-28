import { Link } from "react-router-dom";
import FilaCarrito from "../components/molecules/FilaCarrito";
import ResumenCompra from "../components/organismos/ResumenCompra";
import { useCarrito } from "../store/carrito";

function Carrito(){
    const { items, totalUnidades, total, cambiarCantidad, eliminar, vaciar } = useCarrito();

    const finalizarCompra = () => {
        if (items.length === 0) {
            alert("Tu carrito está vacío");
            return;
        }

        alert("¡Compra realizada con éxito! Gracias por tu compra en Sonido Vivo.");
        vaciar();
    };

    return(
        <>
            <div className="carrito-div">
                <h1>Tu Carrito</h1>
                <p className="carrito-subtitulo">Revisa los productos que elegiste</p>
            </div>

            <div className="container carrito-layout">
                <div className="carrito-items">
                    {items.length === 0 ? (
                        <p className="carrito-vacio">
                            Tu carrito está vacío. <Link to="/productos">Ver catálogo</Link>
                        </p>
                    ) : (
                        items.map((item) => (
                            <FilaCarrito
                                key={item.codigo}
                                item={item}
                                alCambiarCantidad={cambiarCantidad}
                                alEliminar={eliminar}
                            />
                        ))
                    )}

                    <Link to="/productos" className="volver-catalogo">← Volver al catálogo</Link>
                </div>

                <ResumenCompra unidades={totalUnidades} total={total} alComprar={finalizarCompra} />
            </div>
        </>
    )
}

export default Carrito;
