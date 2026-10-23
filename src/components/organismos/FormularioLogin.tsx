import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";

function FormularioLogin(){
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const manejarLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (correo.trim() === "") {
        alert("debe ingresar su correo");
        return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }
        if (contrasena.trim() === ""){
            alert("debe ingresar contraseña")
            return;
        }
        if (contrasena.length < 8){
            alert("La contraseña es muy corta. Debe tener mas de 8 caracteres")
            return;
        }
        alert("Formulario enviado correctamente");
    
    };

    return(
        <form onSubmit={manejarLogin} noValidate className="formulario">

            <CampoFormulario
                etiqueta="Correo electrónico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />
            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contraseña"
                valor={contrasena}
                alCambiar={setContrasena}
            />

            <button type="submit" className="btn btn-primary">
                Ingresar
            </button>

        </form>
    );

    
};

export default FormularioLogin;