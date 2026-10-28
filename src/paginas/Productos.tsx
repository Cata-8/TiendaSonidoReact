import { Link, useParams } from "react-router-dom";
import CardProducto from "../components/molecules/CardProducto";
import { categorias } from "../data/categorias";
import { useProductos } from "../store/productos";

// Una sola página para el catálogo completo (/productos) y para cada categoría (/productos/:categoria).
// Reemplaza a catalogo.html, guitarras.html, bajos.html, baterias.html, teclados.html,
// amplificadores.html, microfonos.html, pedales.html, accesorios.html y estudio_grabacion.html
function Productos(){
    const { categoria } = useParams();
    const { productos } = useProductos();

    const seleccionada = categorias.find((c) => c.slug === categoria);

    if (categoria && !seleccionada) {
        return(
            <div className="pagina-catalogo container">
                <h1>Categoría no encontrada</h1>
                <Link to="/productos" className="btn btn-primary">Ver todo el catálogo</Link>
            </div>
        )
    }

    const lista = seleccionada
        ? productos.filter((p) => p.categoria.includes(seleccionada.filtro))
        : productos;

    return(
        <div className="pagina-catalogo">
            <h1>{seleccionada ? seleccionada.titulo : "Catálogo de Productos"}</h1>

            {lista.length === 0 && (
                <p className="text-center">No hay productos en esta categoría.</p>
            )}

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 grilla-cards">
                {lista.map((p) => (
                    <div className="col" key={p.codigo}>
                        <CardProducto
                            id={p.codigo}
                            marca={p.marca}
                            titulo={p.nombre}
                            precio={p.precio}
                            imagen={p.imagen}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos;
