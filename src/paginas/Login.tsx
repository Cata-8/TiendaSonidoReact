import { Link } from "react-router-dom";
import FormularioLogin from "../components/organismos/FormularioLogin";


function Login(){

    return(
            <div className= "pagina-login container d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="login">

                        <h1>Iniciar sesión</h1>

                        <FormularioLogin/>

                        <p>
                            ¿No tiene una cuenta? Ingrese aquí para registrarte{" "}
                            <Link to="/registro">registrarse</Link>
                        </p>

                    </div>
                </div>
            </div>
        );
}

export default Login;
