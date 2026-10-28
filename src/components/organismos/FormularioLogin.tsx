import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoFormulario from "../molecules/CampoFormulario";
import { iniciarSesion } from "../../store/sesion";
import { esClaveValida, esCorreoValido } from "../../utils/validaciones";

function FormularioLogin(){
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();

    const manejarLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (correo.trim() === "" || clave === "") {
            alert("Debe completar todos los campos");
            return;
        }
        if (!esCorreoValido(correo.trim())) {
            alert("Ingrese un correo válido");
            return;
        }
        if (!esClaveValida(clave)) {
            alert("La clave debe tener 4 dígitos");
            return;
        }

        const usuario = iniciarSesion(correo, clave);

        if (!usuario) {
            alert("Correo o clave incorrectos");
            return;
        }

        // Igual que login.js: el administrador va al panel y el cliente a su cuenta
        navigate(usuario.rol === "admin" ? "/admin" : "/usuario");
    };

    return(
        <form onSubmit={manejarLogin} noValidate>

            <CampoFormulario
                etiqueta="Correo"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />
            <CampoFormulario
                etiqueta="Clave"
                tipo="password"
                nombre="clave"
                valor={clave}
                alCambiar={setClave}
                maxLength={4}
            />

            <button type="submit" className="btn btn-primary">
                INGRESAR
            </button>

        </form>
    );
};

export default FormularioLogin;
