import { useParams } from "react-router-dom"
import BotonVolver from "../components/atoms/BotonVolver"
import { obtenerProducto } from "../data/productos"

function DetalleProducto(){

    const {id} = useParams()

    const producto = obtenerProducto(id ?? "")

    if (!producto) {
        return(
            <div className="detalle-producto">
                <h1>Producto no encontrado</h1>
                <BotonVolver/>
            </div>
        )
    }

    return(
        <div className="detalle-producto">
            <h1>Detalle del producto</h1>

            <img
                src={producto.imagen}
                alt={producto.nombre}
                style={{width: '300px'}}
            />

            <h2>{producto.nombre}</h2>
            <p>{producto.marca} {producto.modelo}</p>

            <p>{producto.descripcion}</p>

            <p>${producto.precio}</p>

            <div className="mt-auto">
                <BotonVolver/>
            </div>
        </div>
    )
}

export default DetalleProducto