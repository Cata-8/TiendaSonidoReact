import Boton from "../atoms/Boton";
import { formatearPrecio } from "../../utils/Formato";

interface CardProductoProps{
    id: string;
    marca: string;
    titulo: string;
    precio: number;
    imagen: string;
}

function CardProducto({id, marca, titulo, precio, imagen}: CardProductoProps) {
    return(
        <div className="card card-tienda producto-card h-100">

            <div className="producto-img-wrap">
                <img
                    src={imagen}
                    className="producto-img"
                    alt={titulo}
                />
            </div>

            <div className="card-body d-flex flex-column">
                <span className="producto-marca">
                    {marca}
                </span>

                <h2 className="producto-nombre">
                    {titulo}
                </h2>

                <p className="producto-precio mt-auto">
                    {formatearPrecio(precio)}
                </p>

                <Boton id={id} texto="Ver Detalle" />
            </div>
        </div>
    )

}

export default CardProducto;
