import { Link } from "react-router-dom";

interface CardCategoriaProps{
    slug: string;
    titulo: string;
    imagen: string;
}

function CardCategoria({ slug, titulo, imagen }: CardCategoriaProps) {
    return(
        <div className="card card-tienda h-100">
            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
            />

            <div className="card-body">
                <Link to={`/productos/${slug}`} className="btn btn-primary">
                    {titulo}
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria;
