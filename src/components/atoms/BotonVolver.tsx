import { Link } from "react-router-dom"

function BotonVolver() {
    
    return(
        <Link
            to={`/productos`}
            className="btn btn-primary"
        >
            Volver al Catálogo
        </Link>
    )

}

export default BotonVolver