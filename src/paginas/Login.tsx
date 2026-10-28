import { Link } from "react-router-dom";
import FormularioLogin from "../components/organismos/FormularioLogin";
import "../css/Login.css";

function Login(){

    return(
            <div className= "container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="shadow-sm p-4 rounded-3" style={{ backgroundColor: "#2A1B38", color: "#F5EFFA" }}>

                            <h2 className="mb-4">Formulario de contacto</h2>

                            <FormularioLogin/>

                            <p className="login-registro">
                                ¿No tienes una cuenta?{" "}
                                <Link to="/registro">Regístrate aquí</Link>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login;