import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { pedidosApi, type PedidoCreado } from "../services/pedidosApi";
import { useSesion } from "../store/sesion";
import { formatearPrecio } from "../utils/Formato";

// Mi cuenta (usuario.html). Muestra los datos de quien inició sesión.
function Usuario(){
    const { usuario, cerrarSesion } = useSesion();
    const navigate = useNavigate();
    const [compras, setCompras] = useState<PedidoCreado[]>([]);
    const usuarioId = usuario?.id;

    // GET /api/pedidos?usuarioId=...  (microservicio de compras)
    useEffect(() => {
        if (usuarioId === undefined) return;
        pedidosApi.deUsuario(usuarioId).then(setCompras).catch(() => setCompras([]));
    }, [usuarioId]);

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

                    {compras.length === 0 ? (
                        <div className="cuenta-accion cuenta-compras-vacio">
                            <i className="bi bi-bag-check"></i>
                            <span>Aún no tienes compras registradas</span>
                        </div>
                    ) : (
                        compras.map((c) => (
                            <div className="cuenta-accion" key={c.id}>
                                <i className="bi bi-bag-check"></i>
                                <span>
                                    {c.numero} · {c.unidades} {c.unidades === 1 ? "producto" : "productos"} ·{" "}
                                    {formatearPrecio(c.total)}
                                </span>
                            </div>
                        ))
                    )}

                    <button type="button" className="btn-comprar cuenta-btn-salir" onClick={salir}>
                        <i className="bi bi-box-arrow-right"></i> Cerrar sesión
                    </button>
                </aside>

            </div>
        </div>
    )
}

export default Usuario;
