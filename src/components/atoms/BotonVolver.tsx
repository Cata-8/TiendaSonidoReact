import { Link } from "react-router-dom"

function BotonVolver() {
    
    return(
        <Link
            to={`/productos`}
            className="btn btn-primary"
        >
            Volver a productos
        </Link>
    )

}

export default BotonVolver