import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSesion } from "../store/Sesion";

// Marco del panel administrador (sidebar). Solo entra un usuario con rol admin.
function LayoutAdmin() {
    const { usuario, cerrarSesion } = useSesion();
    const navigate = useNavigate();

    if (!usuario || usuario.rol !== "admin") {
        return <Navigate to="/login" replace />;
    }

    const salir = () => {
        cerrarSesion();
        navigate("/login");
    };

    return (
        <div className="admin-body">
            <div className="admin-wrapper">
                <aside className="admin-sidebar">
                    <div className="admin-logo">
                        <strong>SONIDO VIVO</strong>
                        <span>PANEL ADMINISTRADOR</span>
                    </div>

                    <nav className="admin-nav">
                        <NavLink to="/admin" end>
                            <i className="bi bi-grid-1x2-fill"></i><span>Dashboard</span>
                        </NavLink>
                        <NavLink to="/admin/productos">
                            <i className="bi bi-music-note-beamed"></i><span>Productos</span>
                        </NavLink>
                        <NavLink to="/admin/usuarios">
                            <i className="bi bi-people-fill"></i><span>Usuarios</span>
                        </NavLink>
                    </nav>

                    <div className="admin-sidebar-footer">
                        <Link to="/">
                            <i className="bi bi-box-arrow-left"></i><span>Volver al sitio</span>
                        </Link>
                        <a href="#" onClick={(e) => { e.preventDefault(); salir(); }}>
                            <i className="bi bi-power"></i><span>Cerrar sesión</span>
                        </a>
                    </div>
                </aside>

                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default LayoutAdmin;
