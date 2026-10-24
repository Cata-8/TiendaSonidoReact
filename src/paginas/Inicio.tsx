
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Inicio.css";

const imagenesCarrusel = [
  {
    src: "/img/carrusel1.jpg",
    alt: "Música en vivo",
  },
  {
    src: "/img/unsplash-image-YjxTbkvZbKA.webp",
    alt: "Discos y cultura musical",
  },
  {
    src: "/img/carrusel_3.jpg",
    alt: "Experiencia musical",
  },
];

const productosDestacados = [
  {
    id: "GE001",
    marca: "SQUIER",
    nombre: "Guitarra Eléctrica Stratocaster",
    precio: "$249.990",
    imagen: "/img/Guitarra_Electrica_Stratocaster_Squier.webp",
  },
  {
    id: "BT002",
    marca: "ROLAND",
    nombre: "Batería Electrónica de 8 Pads",
    precio: "$799.990",
    imagen: "/img/Bateria_Electronica_8_pads_Roland.jpg",
  },
  {
    id: "ES003",
    marca: "AUDIO-TECH",
    nombre: "Auriculares de Estudio Pro",
    precio: "$219.990",
    imagen: "/img/Auriculares_Pro.webp",
  },
];

const productosCatalogo = [
  {
    id: "GA001",
    marca: "YAMAHA",
    nombre: "Guitarra Acústica Folk",
    precio: "$129.990",
    imagen: "/img/Guitarra_Acustica_Folk_Yamaha.jpg",
  },
  {
    id: "GA002",
    marca: "FENDER",
    nombre: "Guitarra Acústica Dreadnought",
    precio: "$189.990",
    imagen: "/img/Guitarra_Acustica_Dreadnought_Fender.webp",
  },
];

const categorias = [
  { nombre: "Guitarras", imagen: "/img/guitarras.jpg", filtro: "acusticas" },
  { nombre: "Bajos", imagen: "/img/bajos.jpg", filtro: "bajos" },
  { nombre: "Baterías", imagen: "/img/baterias.jpg", filtro: "baterias" },
  { nombre: "Teclados y pianos", imagen: "/img/teclados_y_pianos.jpg", filtro: "teclados" },
  { nombre: "Amplificadores", imagen: "/img/amplificadores.jpg", filtro: "amplificadores" },
  { nombre: "Micrófonos", imagen: "/img/microfono.jpg", filtro: "microfonos" },
  { nombre: "Pedales de Efectos", imagen: "/img/pedales.jpg", filtro: "pedales" },
  { nombre: "Accesorios", imagen: "/img/accesorios.jpg", filtro: "accesorios" },
  { nombre: "Estudio y Grabación", imagen: "/img/estudio.jpg", filtro: "estudio y grabacion" }
];

function Inicio() {
  const [imagenActual, setImagenActual] = useState(0);

  const anterior = () => {
    setImagenActual((actual) =>
      actual === 0 ? imagenesCarrusel.length - 1 : actual - 1
    );
  };

  const siguiente = () => {
    setImagenActual((actual) =>
      actual === imagenesCarrusel.length - 1 ? 0 : actual + 1
    );
  };

  return (
    <main className="inicio-musica">
      {/* CARRUSEL PRINCIPAL */}
      <section className="inicio-carrusel" aria-label="Galería musical">
        <img
          key={imagenesCarrusel[imagenActual].src}
          src={imagenesCarrusel[imagenActual].src}
          alt={imagenesCarrusel[imagenActual].alt}
          className="carrusel-imagen"
        />

        <button
          type="button"
          className="carrusel-control carrusel-anterior"
          onClick={anterior}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button
          type="button"
          className="carrusel-control carrusel-siguiente"
          onClick={siguiente}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

        <div className="carrusel-indicadores">
          {imagenesCarrusel.map((imagen, indice) => (
            <button
              key={imagen.src}
              type="button"
              className={indice === imagenActual ? "indicador activo" : "indicador"}
              onClick={() => setImagenActual(indice)}
              aria-label={`Mostrar imagen ${indice + 1}`}
            />
          ))}
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="inicio-seccion">
        <div className="inicio-titulo">
          <h2>Destacados</h2>
        </div>

        <div className="inicio-productos">
          {productosDestacados.map((producto) => (
            <article className="inicio-producto" key={producto.id}>
              <Link
                to={`/productos/${producto.id}`}
                className="producto-imagen"
              >
                <img src={producto.imagen} alt={producto.nombre} />
              </Link>

              <div className="producto-informacion">
                <span className="producto-marca">{producto.marca}</span>
                <h3>{producto.nombre}</h3>
                <p className="producto-precio">{producto.precio}</p>
                <Link
                  to={`/productos/${producto.id}`}
                  className="inicio-boton producto-boton"
                >
                  Ver Detalle
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="inicio-seccion">
        <div className="inicio-titulo">
          <h2>Catálogo</h2>
        </div>

        <div className="inicio-productos inicio-catalogo">
          {productosCatalogo.map((producto) => (
            <article className="inicio-producto" key={producto.id}>
              <Link
                to={`/productos/${producto.id}`}
                className="producto-imagen"
              >
                <img src={producto.imagen} alt={producto.nombre} />
              </Link>

              <div className="producto-informacion">
                <span className="producto-marca">{producto.marca}</span>
                <h3>{producto.nombre}</h3>
                <p className="producto-precio">{producto.precio}</p>
                <Link
                  to={`/productos/${producto.id}`}
                  className="inicio-boton producto-boton"
                >
                  Ver Detalle
                </Link>
              </div>
            </article>
          ))}

          <article className="catalogo-ver-mas">
            <span>¿QUÉ ESTÁS BUSCANDO?</span>
            <Link to="/productos" className="inicio-boton">
              Ver Más
            </Link>
          </article>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="inicio-seccion inicio-seccion-categorias">
        <div className="inicio-titulo">
          <h2>Categorías</h2>
        </div>

        <div className="inicio-categorias">
          {categorias.map((categoria) => (
            <Link
              to={`/productos?categoria=${categoria.filtro}`}
              className="categoria-tarjeta"
              key={categoria.nombre}
            >
              <img src={categoria.imagen} alt={categoria.nombre} />
              <div className="categoria-overlay">
                <h3>{categoria.nombre}</h3>
                <span>Explorar →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CIERRE */}
      <section className="inicio-cierre">
        <p>SONIDO VIVO</p>
        <h2>Tu música. Tu estilo. Tu sonido.</h2>
        <Link to="/productos" className="inicio-boton">
          Descubrir instrumentos
        </Link>
      </section>
    </main>
  );
}

export default Inicio;
