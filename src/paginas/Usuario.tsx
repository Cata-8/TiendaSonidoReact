import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSesion } from "../store/Sesion";

// Mi cuenta (usuario.html). Muestra los datos de quien inició sesión.
function Usuario(){
    const { usuario, cerrarSesion } = useSesion();
    const navigate = useNavigate();

    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    const salir = () => {
        cerrarSesion();
        navigate("/login");
    };

    const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`.trim();

    return(
        <div className="pagina-usuario">
            <section className="carrito-hero">
                <h1>Mi Cuenta</h1>
                <p className="carrito-subtitulo cuenta-bienvenida">
                    Bienvenido de vuelta, {usuario.nombre}
                </p>
            </section>

            <div className="container cuenta-layout">

                <div className="cuenta-perfil">

                    <div className="cuenta-perfil-header">
                        <div className="cuenta-avatar">{usuario.nombre.charAt(0).toUpperCase()}</div>
                        <div>
                            <h2>{nombreCompleto}</h2>
                            <span className="cuenta-badge">{usuario.rol}</span>
                        </div>
                    </div>

                    <div className="cuenta-datos">
                        <div className="cuenta-dato">
                            <span className="cuenta-dato-label">RUN</span>
                            <span className="cuenta-dato-valor">{usuario.run || "-"}</span>
                        </div>
                        <div className="cuenta-dato">
                            <span className="cuenta-dato-label">Correo</span>
                            <span className="cuenta-dato-valor">{usuario.correo}</span>
                        </div>
                        <div className="cuenta-dato">
                            <span className="cuenta-dato-label">Fecha de nacimiento</span>
                            <span className="cuenta-dato-valor">{usuario.fechaNacimiento || "-"}</span>
                        </div>
                        <div className="cuenta-dato">
                            <span className="cuenta-dato-label">Región / Comuna</span>
                            <span className="cuenta-dato-valor">
                                {usuario.comuna || usuario.region
                                    ? `${usuario.comuna}, ${usuario.region}`
                                    : "-"}
                            </span>
                        </div>
                        <div className="cuenta-dato full">
                            <span className="cuenta-dato-label">Dirección</span>
                            <span className="cuenta-dato-valor">{usuario.direccion || "-"}</span>
                        </div>
                    </div>
                </div>

                <aside className="resumen-compra cuenta-acciones-panel">
                    <h2>Mi actividad</h2>

                    <Link to="/carrito" className="cuenta-accion">
                        <i className="bi bi-cart3"></i>
                        <span>Ver mi carrito</span>
                    </Link>

                    <Link to="/productos" className="cuenta-accion">
                        <i className="bi bi-music-note-beamed"></i>
                        <span>Seguir comprando</span>
                    </Link>

                    <div className="cuenta-accion cuenta-compras-vacio">
                        <i className="bi bi-bag-check"></i>
                        <span>Aún no tienes compras registradas</span>
                    </div>

                    <button type="button" className="btn-comprar cuenta-btn-salir" onClick={salir}>
                        <i className="bi bi-box-arrow-right"></i> Cerrar sesión
                    </button>
                </aside>

            </div>
        </div>
    )
}

export default Usuario;
