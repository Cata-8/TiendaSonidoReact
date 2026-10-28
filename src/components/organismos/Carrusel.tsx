import { useEffect, useState } from "react";

const diapositivas = [
    { src: "/img/carrusel1.jpg", alt: "imagen banda" },
    { src: "/img/unsplash-image-YjxTbkvZbKA.webp", alt: "imagen disco" },
    { src: "/img/carrusel_3.jpg", alt: "imagen carrusel" },
];

const TIEMPO_ENTRE_DIAPOSITIVAS = 5000; // mismo intervalo por defecto que el carrusel de Bootstrap

// Carrusel con las clases de Bootstrap pero controlado con React (sin bootstrap.bundle.js)
function Carrusel() {
    const [indice, setIndice] = useState(0);

    const siguiente = () => setIndice((actual) => (actual + 1) % diapositivas.length);
    const anterior = () => setIndice((actual) => (actual - 1 + diapositivas.length) % diapositivas.length);

    // Avanza solo; al cambiar de diapositiva (a mano o automático) reinicia la cuenta
    useEffect(() => {
        const temporizador = setTimeout(() => {
            setIndice((actual) => (actual + 1) % diapositivas.length);
        }, TIEMPO_ENTRE_DIAPOSITIVAS);

        return () => clearTimeout(temporizador);
    }, [indice]);

    return(
        <div className="carousel slide carrusel">
            <div className="carousel-inner">
                {diapositivas.map((diapositiva, i) => (
                    <div
                        key={diapositiva.src}
                        className={`carousel-item${i === indice ? " active" : ""}`}
                    >
                        <img src={diapositiva.src} className="d-block w-100" alt={diapositiva.alt} />
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" type="button" onClick={anterior}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>

            <button className="carousel-control-next" type="button" onClick={siguiente}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default Carrusel;
