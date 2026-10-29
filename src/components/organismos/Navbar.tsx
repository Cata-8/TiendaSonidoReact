import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { categorias } from "../../data/categorias"
import { useCarrito } from "../../store/Carrito"
import { useSesion } from "../../store/Sesion"

function Navbar(){
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [catalogoAbierto, setCatalogoAbierto] = useState(false);
    const itemCatalogo = useRef<HTMLLIElement>(null);

    const { totalUnidades } = useCarrito();
    const { usuario, cerrarSesion } = useSesion();
    const navigate = useNavigate();

    // Cierra el desplegable "Catálogo" al hacer clic fuera de él
    useEffect(() => {
        const alHacerClic = (e: MouseEvent) => {
            if (itemCatalogo.current && !itemCatalogo.current.contains(e.target as Node)) {
                setCatalogoAbierto(false);
            }
        };
        document.addEventListener("mousedown", alHacerClic);
        return () => document.removeEventListener("mousedown", alHacerClic);
    }, []);

    const cerrarMenus = () => {
        setMenuAbierto(false);
        setCatalogoAbierto(false);
    };

    const salir = () => {
        cerrarSesion();
        cerrarMenus();
        navigate("/");
    };

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" onClick={cerrarMenus}>
                    SONIDO VIVO
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="menuPrincipal"
                    aria-expanded={menuAbierto}
                    aria-label="Mostrar u ocultar el menú"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse${menuAbierto ? " show" : ""}`}
                    id="menuPrincipal"
                >
                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end onClick={cerrarMenus}>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown" ref={itemCatalogo}>
                            <button
                                type="button"
                                className="nav-link dropdown-toggle"
                                aria-expanded={catalogoAbierto}
                                onClick={() => setCatalogoAbierto(!catalogoAbierto)}
                            >
                                Catálogo
                            </button>

                            <ul className={`dropdown-menu${catalogoAbierto ? " show" : ""}`}>
                                <li>
                                    <Link className="dropdown-item" to="/productos" onClick={cerrarMenus}>
                                        Todos los productos
                                    </Link>
                                </li>

                                {categorias.map((categoria) => (
                                    <li key={categoria.slug}>
                                        <Link
                                            className="dropdown-item"
                                            to={`/productos/${categoria.slug}`}
                                            onClick={cerrarMenus}
                                        >
                                            {categoria.titulo}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ubicacion" onClick={cerrarMenus}>
                                Ubicación
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/quienesSomos" onClick={cerrarMenus}>
                                Quienes somos
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto" onClick={cerrarMenus}>
                                Contacto
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/preguntas-frecuentes" onClick={cerrarMenus}>
                                Preguntas frecuentes
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/carrito" onClick={cerrarMenus}>
                                <i className="bi bi-cart3"></i> Carrito
                                {totalUnidades > 0 && (
                                    <span className="badge rounded-pill ms-1">{totalUnidades}</span>
                                )}
                            </NavLink>
                        </li>

                    </ul>

                    <div className="acciones-sesion d-flex align-items-center gap-2">
                        {usuario ? (
                            <>
                                {usuario.rol === "admin" && (
                                    <Link className="btn btn-outline-success" to="/admin" onClick={cerrarMenus}>
                                        Panel admin
                                    </Link>
                                )}
                                <Link className="btn btn-outline-secondary" to="/usuario" onClick={cerrarMenus}>
                                    Mi cuenta
                                </Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={salir}>
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="btn btn-outline-success me-2" to="/login" onClick={cerrarMenus}>
                                    Iniciar Sesión
                                </Link>
                                <Link className="btn btn-sm btn-outline-secondary" to="/registro" onClick={cerrarMenus}>
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
