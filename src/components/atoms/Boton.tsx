import { Link } from "react-router-dom";

interface BotonProps{
    id: string;
    texto?: string; // por defecto "Ver producto"
}

function Boton({ id, texto = "Ver producto" }: BotonProps) {

    return(
        <Link
            to={`/producto/${id}`}
            className="btn btn-primary"
        >
            {texto}
        </Link>
    )

}

export default Boton
