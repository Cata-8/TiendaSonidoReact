import { Link } from "react-router-dom";
import Carrusel from "../components/organismos/Carrusel";
import CardProducto from "../components/molecules/CardProducto";
import CardCategoria from "../components/molecules/CardCategoria";
import { categorias } from "../data/categorias";
import { useProductos } from "../store/productos";
import type { Producto } from "../types/producto";

// Códigos que el inicio.html original mostraba a mano
const CODIGOS_DESTACADOS = ["GE001", "BT002", "ES003"];
const CODIGOS_CATALOGO = ["GA001", "GA002"];

function Inicio(){
    const { productos } = useProductos();

    const buscar = (codigos: string[]): Producto[] =>
        codigos
            .map((codigo) => productos.find((p) => p.codigo === codigo))
            .filter((p): p is Producto => p !== undefined);

    const tarjeta = (p: Producto) => (
        <div className="col" key={p.codigo}>
            <CardProducto id={p.codigo} marca={p.marca} titulo={p.nombre} precio={p.precio} imagen={p.imagen} />
        </div>
    );

    return(
        <>
            <Carrusel />

            <br />
            <h1>Destacados</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 grilla-cards">
                {buscar(CODIGOS_DESTACADOS).map(tarjeta)}
            </div>
            <br />

            <h1>Catálogo</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 grilla-cards">
                {buscar(CODIGOS_CATALOGO).map(tarjeta)}

                <div className="col">
                    <div className="card card-tienda card-ver-mas">
                        <Link to="/productos" className="btn btn-ver-mas">Ver Más</Link>
                    </div>
                </div>
            </div>

            <br />
            <h1>Categorías</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 grilla-cards">
                {categorias.map((c) => (
                    <div className="col" key={c.slug}>
                        <CardCategoria slug={c.slug} titulo={c.titulo} imagen={c.imagen} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Inicio;
