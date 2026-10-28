import { Link } from "react-router-dom";
import FormularioRegistro from "../components/organismos/FormularioRegistro";

function Registro(){

    return(
        <div className="pagina-login container d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
                <div className="login login-ancho">

                    <h1>Crear cuenta:</h1>

                    <FormularioRegistro/>

                    <p>
                        ¿Ya tienes una cuenta? Ingresa aquí{" "}
                        <Link to="/login">iniciar sesión</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Registro;
