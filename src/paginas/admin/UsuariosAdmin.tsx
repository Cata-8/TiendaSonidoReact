import { useState } from "react";
import { Link } from "react-router-dom";
import TablaUsuarios from "../../components/organismos/TablaUsuarios";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { useSesion } from "../../store/Sesion";
import { useUsuarios } from "../../store/Usuarios";

function UsuariosAdmin(){
    const { usuarios, eliminar } = useUsuarios();
    const { usuario: sesion } = useSesion();
    const [busqueda, setBusqueda] = useState("");

    const texto = busqueda.toLowerCase();
    const filtrados = usuarios.filter((u) =>
        u.nombre.toLowerCase().includes(texto) ||
        u.correo.toLowerCase().includes(texto)
    );

    const pedirEliminar = (id: number) => {
        // Evita que el administrador se quede sin acceso al panel
        if (id === sesion?.id) {
            alert("No puedes eliminar tu propia cuenta mientras tienes la sesión iniciada");
            return;
        }
        if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;
        eliminar(id);
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

                <TablaUsuarios usuarios={filtrados} alEliminar={pedirEliminar} />
            </div>
        </PaginaAdmin>
    )
}

export default UsuariosAdmin;
