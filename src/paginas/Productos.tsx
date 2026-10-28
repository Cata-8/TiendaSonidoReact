import { useState } from "react";
import CardProducto from "../components/molecules/CardProducto";
import { buscarProductos } from "../data/productos";

function Productos(){

    const [texto, setTexto] = useState("");
    const lista = buscarProductos(texto);

    return(
        <div className="contenedor-productos">
            <h1>Productos</h1>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Buscar por nombre, marca o código..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            {lista.length === 0 ? (
                <p>No se encontraron productos</p>
            ) : (
                <div className="d-flex gap-3">{/* Clase de bootstrap que permite que las Cards se vean horizontalmente */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 grilla-cards">
                        {lista.map((p) => (
                            <CardProducto
                                key={p.codigo}
                                id={p.codigo}
                                marca={p.marca}
                                titulo={p.nombre}
                                descripcion={p.descripcion}
                                precio={p.precio}
                                imagen={p.imagen}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Productos