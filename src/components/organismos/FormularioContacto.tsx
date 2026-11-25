import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import { mensajeDeError } from "../../services/api";
import { contactosApi } from "../../services/contactosApi";

function FormularioContacto(){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    const manejarEnvio = async (e: React.SubmitEvent<HTMLFormElement>) => {
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

        try {
            // POST /api/contactos (microservicio de mensajería)
            await contactosApi.enviar(nombre.trim(), correo.trim(), mensaje.trim());
            alert("Formulario enviado correctamente");
            setNombre("");
            setCorreo("");
            setMensaje("");
        } catch (error) {
            alert(mensajeDeError(error));
        }
    };

    return(
        <form onSubmit={manejarEnvio} noValidate>
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