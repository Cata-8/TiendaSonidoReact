import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CampoFormulario from "../molecules/CampoFormulario";
import { mensajeDeError } from "../../services/api";
import { iniciarSesion } from "../../store/sesion";
import { esClaveValida, esCorreoValido } from "../../utils/Validaciones";

function FormularioLogin(){
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();
    const ubicacion = useLocation();
    // RutaProtegida deja aquí la página que la persona quería abrir (ej: /pago)
    const desde = (ubicacion.state as { desde?: string } | null)?.desde;

    const manejarLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
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

        try {
            // Llama al microservicio de usuarios: POST /api/usuarios/login
            const usuario = await iniciarSesion(correo, clave);

            // El administrador va al panel y el cliente a su cuenta
            navigate(usuario.rol === "admin" ? "/admin" : (desde ?? "/usuario"));
        } catch (error) {
            // 401 -> "Correo o clave incorrectos"; sin conexión -> aviso de servidor apagado
            alert(mensajeDeError(error));
        }
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
