import { useState } from "react";
import { Link } from "react-router-dom";
import TablaUsuarios from "../../components/organismos/TablaUsuarios";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { mensajeDeError } from "../../services/api";
import { useSesion } from "../../store/sesion";
import { useUsuarios } from "../../store/usuarios";

function UsuariosAdmin(){
    const { usuarios, eliminar, cargando, error, recargar } = useUsuarios(true);
    const { usuario: sesion } = useSesion();
    const [busqueda, setBusqueda] = useState("");

    const texto = busqueda.toLowerCase();
    const filtrados = usuarios.filter((u) =>
        u.nombre.toLowerCase().includes(texto) ||
        u.correo.toLowerCase().includes(texto)
    );

    const pedirEliminar = async (id: number) => {
        // Evita que el administrador se quede sin acceso al panel
        if (id === sesion?.id) {
            alert("No puedes eliminar tu propia cuenta mientras tienes la sesión iniciada");
            return;
        }
        if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;
        try {
            await eliminar(id); // DELETE /api/usuarios/{id}
        } catch (e) {
            alert(mensajeDeError(e));
        }
    };

    return(
        <PaginaAdmin titulo="Mantenedor de Usuarios">
            <div className="admin-panel-box">

                <div className="admin-actionbar">
                    <div className="admin-search">
                        <i className="bi bi-search"></i>
                        <input
                            type="text"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            placeholder="Buscar por nombre o correo..."
                        />
                    </div>

                    <Link to="/admin/usuarios/nuevo" className="btn-admin btn-admin-primario">
                        <i className="bi bi-person-plus"></i> Nuevo usuario
                    </Link>
                </div>

                {cargando && <p>Cargando usuarios...</p>}
                {error && (
                    <div className="alert alert-danger">
                        {error} <button type="button" className="btn btn-sm btn-outline-danger ms-2" onClick={recargar}>Reintentar</button>
                    </div>
                )}

                <TablaUsuarios usuarios={filtrados} alEliminar={pedirEliminar} />
            </div>
        </PaginaAdmin>
    )
}

export default UsuariosAdmin;
