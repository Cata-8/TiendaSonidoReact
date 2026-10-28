import { Link } from "react-router-dom";

function NoEncontrada(){
    return(
        <div className="container mt-5 text-center">
            <h1>Página no encontrada</h1>
            <p className="mb-4">La dirección que buscas no existe.</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}

export default NoEncontrada;
