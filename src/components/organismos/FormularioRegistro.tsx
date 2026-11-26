import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoFormulario from "../molecules/CampoFormulario";
import { mensajeDeError } from "../../services/api";
import { useUsuarios } from "../../store/usuarios";
import type { DatosUsuario } from "../../types/usuario";
import { esClaveValida, validarFormularioUsuario } from "../../utils/Validaciones";

const inicial = {
    run: "", nombre: "", apellidos: "", correo: "", fechaNacimiento: "",
    region: "", comuna: "", direccion: "", clave: "", confirmarClave: "",
};

function FormularioRegistro(){
    const [form, setForm] = useState(inicial);
    const { crear } = useUsuarios();
    const navigate = useNavigate();

    const cambiar = (campo: keyof typeof inicial) => (valor: string) =>
        setForm((anterior) => ({ ...anterior, [campo]: valor }));

    const manejarRegistro = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const datos: DatosUsuario = {
            run: form.run.trim(),
            nombre: form.nombre.trim(),
            apellidos: form.apellidos.trim(),
            correo: form.correo.trim(),
            fechaNacimiento: form.fechaNacimiento,
            rol: "cliente", // el registro público solo crea clientes (el backend también lo fuerza)
            region: form.region.trim(),
            comuna: form.comuna.trim(),
            direccion: form.direccion.trim(),
            clave: form.clave,
        };

        const resultado = validarFormularioUsuario(datos);
        if (!resultado.valido) {
            alert(resultado.mensaje);
            return;
        }
        if (form.clave === "" || form.confirmarClave === "") {
            alert("Debe completar todos los campos");
            return;
        }
        if (!esClaveValida(form.clave)) {
            alert("La clave debe tener 4 dígitos");
            return;
        }
        if (form.clave !== form.confirmarClave) {
            alert("Las claves no coinciden");
            return;
        }

        try {
            // POST /api/usuarios. Correo y RUN repetidos los valida el servidor (409)
            await crear(datos);
            alert("Cuenta creada correctamente");
            navigate("/login");
        } catch (error) {
            alert(mensajeDeError(error));
        }
    };

    return(
        <form onSubmit={manejarRegistro} noValidate>
            <CampoFormulario etiqueta="RUN (sin puntos ni guión)" tipo="text" nombre="run"
                valor={form.run} alCambiar={cambiar("run")} maxLength={9} placeholder="Ej: 12345678K" />
            <CampoFormulario etiqueta="Nombre" tipo="text" nombre="nombre"
                valor={form.nombre} alCambiar={cambiar("nombre")} maxLength={50} />
            <CampoFormulario etiqueta="Apellidos" tipo="text" nombre="apellidos"
                valor={form.apellidos} alCambiar={cambiar("apellidos")} maxLength={100} />
            <CampoFormulario etiqueta="Correo" tipo="email" nombre="correo"
                valor={form.correo} alCambiar={cambiar("correo")} maxLength={100} />
            <CampoFormulario etiqueta="Fecha de nacimiento (opcional)" tipo="date" nombre="fechaNacimiento"
                valor={form.fechaNacimiento} alCambiar={cambiar("fechaNacimiento")} />
            <CampoFormulario etiqueta="Región" tipo="text" nombre="region"
                valor={form.region} alCambiar={cambiar("region")} />
            <CampoFormulario etiqueta="Comuna" tipo="text" nombre="comuna"
                valor={form.comuna} alCambiar={cambiar("comuna")} />
            <CampoFormulario etiqueta="Dirección" tipo="text" nombre="direccion"
                valor={form.direccion} alCambiar={cambiar("direccion")} maxLength={300} />
            <CampoFormulario etiqueta="Clave (4 dígitos)" tipo="password" nombre="clave"
                valor={form.clave} alCambiar={cambiar("clave")} maxLength={4} />
            <CampoFormulario etiqueta="Confirmar clave" tipo="password" nombre="confirmarClave"
                valor={form.confirmarClave} alCambiar={cambiar("confirmarClave")} maxLength={4} />

            <button type="submit" className="btn btn-primary">
                REGISTRARME
            </button>
        </form>
    );
}

export default FormularioRegistro;
