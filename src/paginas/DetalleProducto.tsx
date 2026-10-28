import { useNavigate, useParams } from "react-router-dom"
import BotonVolver from "../components/atoms/BotonVolver"
import { useCarrito } from "../store/carrito"
import { useProductos } from "../store/productos"
import { formatearPrecio } from "../utils/formato"

function DetalleProducto(){

    const {id} = useParams()
    const { buscar } = useProductos()
    const { agregar } = useCarrito()
    const navigate = useNavigate()

    const producto = id ? buscar(id) : undefined

    if (!producto) {
        return(
            <div className="pagina-detalle">
                <h1>Producto no encontrado</h1>
                <p className="detalle-no-encontrado">El producto que buscas no existe o fue eliminado.</p>
                <div className="acciones-detalle">
                    <BotonVolver/>
                </div>
            </div>
        )
    }

    // Igual que agregarAlCarrito() de detalle.js: agrega y lleva al carrito
    const agregarYVer = () => {
        agregar(producto)
        navigate("/carrito")
    }

    return(
        <div className="pagina-detalle">
            <h1>Detalle del Producto</h1>

            <img
                className="detalle-imagen"
                src={producto.imagen}
                alt={producto.nombre}
                width={300}
            />

            <h2>{producto.nombre}</h2>

            <p className="detalle-marca">Marca: {producto.marca}</p>
            <p className="detalle-modelo">Modelo: {producto.modelo}</p>
            <p className="detalle-precio">Precio: {formatearPrecio(producto.precio)}</p>
            <p className="detalle-descripcion">Descripción: {producto.descripcion}</p>
            <br />

            <div className="acciones-detalle">
                <button type="button" className="btn-detalle btn-primario" onClick={agregarYVer}>
                    Agregar al carrito
                </button>
                <BotonVolver/>
            </div>
        </div>
    )
}

export default DetalleProducto
