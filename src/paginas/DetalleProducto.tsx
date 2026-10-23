import { useParams } from "react-router-dom"
import BotonVolver from "../components/atoms/BotonVolver"

const productos = [
    {
        id: "GA001",
        categoria: "Guitarras Acústicas",
        titulo: "Guitarra Acústica Folk",
        marca: "Yamaha",
        modelo: "F310",
        stock: 8,
        precio: 129990,
        descripcion: "Tapa de abeto, aros y fondo de meranti. Ideal para principiantes.",
        imagen: "/img/Guitarra_Acustica_Folk_Yamaha.jpg"
    },
    {
        id: "GA002",
        categoria: "Guitarras Acústicas",
        titulo: "Guitarra Acústica Dreadnought",
        marca: "Fender",
        modelo: "CD-60S",
        stock: 5,
        precio: 189990,
        descripcion: "Tapa de abeto macizo y brazo de caoba. Sonido cálido.",
        imagen: "/img/Guitarra_Acustica_Dreadnought_Fender.webp"
    },
    {
        id: "GA003",
        categoria: "Guitarras Acústicas",
        titulo: "Guitarra Acústica Clásica 4/4",
        marca: "Yamaha",
        modelo: "C40",
        stock: 10,
        precio: 89990,
        descripcion: "Guitarra de cuerdas de nailon, ideal para estudiar.",
        imagen: "/img/Guitarra_Acustica_Clasica_44_Yamaha.webp"
    },
    {
        id: "GA004",
        categoria: "Guitarras Acústicas",
        titulo: "Guitarra Electroacústica",
        marca: "Takamine",
        modelo: "GN20CE",
        stock: 3,
        precio: 349990,
        descripcion: "Guitarra con sistema de amplificación y afinador incorporado.",
        imagen: "/img/Guitarra_Electroacustica_Takamine.webp"
    },
    {
        id: "GE001",
        categoria: "Guitarras Eléctricas",
        titulo: "Guitarra Eléctrica Stratocaster",
        marca: "Squier",
        modelo: "Affinity Strat",
        stock: 5,
        precio: 249990,
        descripcion: "Cuerpo de álamo, mástil de arce y tres pastillas.",
        imagen: "/img/Guitarra_Electrica_Stratocaster_Squier.webp"
    },
    {
        id: "GE002",
        categoria: "Guitarras Eléctricas",
        titulo: "Guitarra Eléctrica Les Paul",
        marca: "Epiphone",
        modelo: "Les Paul Std",
        stock: 4,
        precio: 329990,
        descripcion: "Guitarra eléctrica con cuerpo de caoba y pastillas humbucker.",
        imagen: "/img/Guitarra_Electrica_Les_Paul_Epiphone.jpg"
    },
    {
        id: "BA001",
        categoria: "Bajos Eléctricos",
        titulo: "Bajo Eléctrico de 4 Cuerdas",
        marca: "Squier",
        modelo: "Affinity PJ",
        stock: 5,
        precio: 299990,
        descripcion: "Bajo eléctrico versátil para comenzar a tocar.",
        imagen: "/img/Bajo_Electrico_4_Cuerdas_Squier.webp"
    },
    {
        id: "BT002",
        categoria: "Baterías",
        titulo: "Batería Electrónica de 8 Pads",
        marca: "Roland",
        modelo: "Electrónica",
        stock: 3,
        precio: 799990,
        descripcion: "Batería electrónica para practicar y grabar.",
        imagen: "/img/Bateria_Electronica_8_pads_Roland.jpg"
    },
    {
        id: "AM001",
        categoria: "Amplificadores",
        titulo: "Amplificador de Guitarra 15W",
        marca: "Fender",
        modelo: "Frontman 15G",
        stock: 5,
        precio: 99990,
        descripcion: "Amplificador de 15W con entrada auxiliar.",
        imagen: "/img/Amplificador_Guitarra_15W_Fender.jpg"
    },
    {
        id: "TC003",
        categoria: "Teclados y Pianos",
        titulo: "Sintetizador de 49 Teclas",
        marca: "Arturia",
        modelo: "MiniLab MKII",
        stock: 5,
        precio: 129990,
        descripcion: "Controlador MIDI para producción musical.",
        imagen: "/img/Sintetizador_49_teclas_Arturia.jpg"
    }
]


function DetalleProducto(){

    const {id} = useParams()

    const producto = productos.find(
        producto => producto.id === id
    )

    return(
        <div className="detalle-producto">
            <h1>Detalle del producto</h1>

            <img
                src={producto?.imagen}
                alt={producto?.titulo}
                style={{width: '300px'}}
            />

            <h2>{producto?.titulo}</h2>
            <p>{producto?.marca} {producto?.modelo}</p>

            <p>{producto?.descripcion}</p>

            <p>${producto?.precio}</p>

            <div className="mt-auto">
                <BotonVolver/>
            </div>
        </div>
    )
}

export default DetalleProducto