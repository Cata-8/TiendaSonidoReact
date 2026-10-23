import Boton from "../atoms/Boton";

interface CardProducto{
    id: string;
    marca: string;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

function CardProducto({id, titulo, descripcion, precio, imagen}: CardProducto) {
    return(
        <div className="card-producto" style={{width: '20rem'}}>

            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{height: '200px', objectFit: 'contain'}}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    {titulo}
                </h5>

                <p className="card-text">
                    {descripcion}
                </p>
                <p className="card-text">
                    ${precio}
                </p>
                <div className="mt-auto">
                    <Boton id={id} />
                </div>
                
            </div>
        </div>
    )
        
}

export default CardProducto;