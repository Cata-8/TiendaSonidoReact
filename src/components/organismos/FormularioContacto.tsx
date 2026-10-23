import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";

function FormularioContacto(){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nombre.trim() === ""){
            alert("Debe ingresar su nombre");
            return;
        }
        if (correo.trim() === "") {
            alert("debe ingresar su correo");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }
        if(mensaje.trim() === ""){
            alert("Debe ingresar un mensaje");
            return;
        }
        alert("Formulario enviado correctamente");
    };

    return(
        <form onSubmit={manejarEnvio} noValidate className="formulario">
            <CampoFormulario
                etiqueta="Nombre Completo"
                tipo="text"
                nombre="nombre"
                valor={nombre}
                alCambiar={setNombre}
            />

            <CampoFormulario
                etiqueta="Correo electrónico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />

            <CampoFormulario
                etiqueta="Mensaje"
                tipo="text"
                nombre="mensaje"
                valor={mensaje}
                alCambiar={setMensaje}
            />

            <button type="submit" className="btn btn-primary">
                Enviar mensaje
            </button>

        </form>
    );
}

export default FormularioContacto;