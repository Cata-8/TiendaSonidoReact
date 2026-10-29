import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CampoAdmin from "../molecules/CampoAdmin";
import { correoRepetido, runRepetido, useUsuarios } from "../../store/Usuarios";
import type { DatosUsuario, Rol, Usuario } from "../../types/Usuario";
import { esClaveValida, validarFormularioUsuario } from "../../utils/Validaciones";

interface FormularioUsuarioProps{
    usuario?: Usuario; // si viene, se está editando
}

function FormularioUsuario({ usuario }: FormularioUsuarioProps) {
    const editando = usuario !== undefined;
    const { usuarios, crear, actualizar } = useUsuarios();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        run: usuario?.run ?? "",
        rol: usuario?.rol ?? "",
        nombre: usuario?.nombre ?? "",
        apellidos: usuario?.apellidos ?? "",
        correo: usuario?.correo ?? "",
        fechaNacimiento: usuario?.fechaNacimiento ?? "",
        region: usuario?.region ?? "",
        comuna: usuario?.comuna ?? "",
        direccion: usuario?.direccion ?? "",
        clave: usuario?.clave ?? "",
    });

    const cambiar = (campo: keyof typeof form) => (valor: string) =>
        setForm((anterior) => ({ ...anterior, [campo]: valor }));

    const guardar = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const datos: DatosUsuario = {
            run: form.run.trim(),
            nombre: form.nombre.trim(),
            apellidos: form.apellidos.trim(),
            correo: form.correo.trim(),
            fechaNacimiento: form.fechaNacimiento,
            rol: form.rol as Rol,
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
        if (!esClaveValida(datos.clave)) {
            alert("La clave debe tener 4 dígitos");
            return;
        }
        if (correoRepetido(usuarios, datos.correo, usuario?.id)) {
            alert("Ya existe un usuario con ese correo");
            return;
        }
        if (runRepetido(usuarios, datos.run, usuario?.id)) {
            alert("Ya existe un usuario con ese RUN");
            return;
        }

        if (usuario) {
            actualizar({ ...datos, id: usuario.id });
        } else {
            crear(datos);
        }

        alert(editando ? "Usuario actualizado correctamente" : "Usuario creado correctamente");
        navigate("/admin/usuarios");
    };

    return(
        <form onSubmit={guardar} noValidate>
            <div className="admin-form-grid">
                <CampoAdmin etiqueta="RUN (sin puntos ni guión)" nombre="run" valor={form.run}
                    alCambiar={cambiar("run")} maxLength={9} placeholder="Ej: 12345678K" />
                <CampoAdmin etiqueta="Tipo de usuario" nombre="rol" tipo="select" valor={form.rol}
                    alCambiar={cambiar("rol")} placeholderSelect="Seleccione tipo de usuario"
                    opciones={[
                        { valor: "cliente", etiqueta: "Cliente" },
                        { valor: "admin", etiqueta: "Administrador" },
                    ]} />
                <CampoAdmin etiqueta="Nombre" nombre="nombre" valor={form.nombre}
                    alCambiar={cambiar("nombre")} maxLength={50} completo />
                <CampoAdmin etiqueta="Apellidos" nombre="apellidos" valor={form.apellidos}
                    alCambiar={cambiar("apellidos")} maxLength={100} />
                <CampoAdmin etiqueta="Correo" nombre="correo" tipo="email" valor={form.correo}
                    alCambiar={cambiar("correo")} maxLength={100} completo />
                <CampoAdmin etiqueta="Fecha de nacimiento (opcional)" nombre="fechaNacimiento" tipo="date"
                    valor={form.fechaNacimiento} alCambiar={cambiar("fechaNacimiento")} />
                <CampoAdmin etiqueta="Región" nombre="region" valor={form.region} alCambiar={cambiar("region")} />
                <CampoAdmin etiqueta="Comuna" nombre="comuna" valor={form.comuna} alCambiar={cambiar("comuna")} />
                <CampoAdmin etiqueta="Dirección" nombre="direccion" valor={form.direccion}
                    alCambiar={cambiar("direccion")} maxLength={300} completo />
                <CampoAdmin etiqueta="Clave (4 dígitos)" nombre="clave" tipo="password" valor={form.clave}
                    alCambiar={cambiar("clave")} maxLength={4} />
            </div>

            <div className="admin-form-actions">
                <button type="submit" className="btn-admin btn-admin-primario">
                    <i className="bi bi-check-lg"></i> Guardar usuario
                </button>
                <Link to="/admin/usuarios" className="btn-admin btn-admin-secundario">Cancelar</Link>
            </div>
        </form>
    );
}

export default FormularioUsuario;
