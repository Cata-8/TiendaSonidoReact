import { Link } from "react-router-dom";

// Se muestra cuando alguien con sesión intenta entrar a una sección que su rol no permite
function AccesoDenegado(){
    return(
        <div className="pagina-catalogo container text-center">
            <h1>Acceso denegado</h1>
            <p>No tienes permisos para ver esta sección.</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}

export default AccesoDenegado;
