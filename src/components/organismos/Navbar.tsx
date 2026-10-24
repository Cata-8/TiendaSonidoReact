import { Link } from "react-router-dom";
import { useState } from "react";
import "../../css/Navbar.css";

function Navbar(){
    const [categoriasAbiertas, setCategoriasAbiertas] = useState(false);
    return(
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <span className="navbar-brand text-white">
                    Sonido Vivo
                </span>

                <div className="navbar-nav">

                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>
                    <div className="dropdown-categorias">
                    
                    <div className="dropdown-categorias">
                    <button
                        type="button"
                        className="dropdown-boton"
                        aria-expanded={categoriasAbiertas}
                        onClick={() => setCategoriasAbiertas(!categoriasAbiertas)}
                    >
                        Categorías <span>▾</span>
                    </button>

                    <div className={`dropdown-menu ${categoriasAbiertas ? "show" : ""}`}>
                        <Link to="/productos?categoria=acusticas" onClick={() => setCategoriasAbiertas(false)}>
                        Guitarras acústicas
                        </Link>
                        <Link to="/productos?categoria=electricas" onClick={() => setCategoriasAbiertas(false)}>
                        Guitarras eléctricas
                        </Link>
                        <Link to="/productos?categoria=bajos" onClick={() => setCategoriasAbiertas(false)}>
                        Bajos
                        </Link>
                        <Link to="/productos?categoria=baterias" onClick={() => setCategoriasAbiertas(false)}>
                        Baterías
                        </Link>
                        <Link to="/productos?categoria=teclados" onClick={() => setCategoriasAbiertas(false)}>
                        Teclados y sintetizadores
                        </Link>
                        <Link to="/productos?categoria=amplificadores" onClick={() => setCategoriasAbiertas(false)}>
                        Amplificadores
                        </Link>
                    </div>
                    </div>

                    </div>
                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>
                    <Link className="nav-link text-white" to="/quienesSomos">
                            Quienes somos
                    </Link>
                    <Link className="nav-link text-white" to="/ubicacion">
                            Ubicación
                    </Link>
                    <Link className="nav-link text-white" to="/login">
                            Login
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar