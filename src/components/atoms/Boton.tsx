import { Link } from "react-router-dom";

interface BotonProps{
    id: string;
}

function Boton({ id }: BotonProps) {
    
    return(
        <Link
            to={`/producto/${id}`}
            className="btn-detalle"
        >
            Ver Detalle
        </Link>
    )

}

export default Boton