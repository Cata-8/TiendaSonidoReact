import { Link } from "react-router-dom";

interface BotonProps{
    id: string;
    texto?: string;
}

function Boton({ id }: BotonProps) {

    return(
        <Link
            to={`/producto/${id}`}
            className="btn btn-primary"
        >
            Ver Detalle
        </Link>
    )

}

export default Boton
