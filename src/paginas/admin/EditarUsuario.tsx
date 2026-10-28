import { Link, useParams } from "react-router-dom";
import FormularioUsuario from "../../components/organismos/FormularioUsuario";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { useUsuarios } from "../../store/usuarios";

// Sirve para crear (/admin/usuarios/nuevo) y para editar (/admin/usuarios/:id/editar)
function EditarUsuario(){
    const { id } = useParams();
    const { buscar } = useUsuarios();

    const usuario = id ? buscar(Number(id)) : undefined;

    if (id && !usuario) {
        return(
            <PaginaAdmin titulo="Usuario no encontrado">
                <div className="admin-panel-box">
                    <p>No existe un usuario con el id {id}.</p>
                    <Link to="/admin/usuarios" className="btn-admin btn-admin-secundario">Volver</Link>
                </div>
            </PaginaAdmin>
        )
    }

    return(
        <PaginaAdmin titulo={usuario ? "Editar Usuario" : "Nuevo Usuario"}>
            <div className="admin-panel-box">
                <FormularioUsuario key={id ?? "nuevo"} usuario={usuario} />
            </div>
        </PaginaAdmin>
    )
}

export default EditarUsuario;
