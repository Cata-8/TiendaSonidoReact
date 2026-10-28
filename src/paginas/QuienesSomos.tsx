
import "../css/QuienesSomos.css";

function QuienesSomos() {
  return (
    <main className="quienes-somos">
      <section className="nosotros-contenido">
        <div className="nosotros-imagen">
          <img
            src="/img/Hambo.jpg"
            alt="Sonido Vivo, nuestra identidad musical"
          />
        </div>

        <div className="nosotros-texto">

          <h1>
            ¿Quiénes <span>somos?</span>
          </h1>

          <p>
            En Sonido Vivo somos una tienda dedicada a quienes viven
            la música a su manera. Ofrecemos instrumentos, equipos y
            accesorios para acompañarte en cada nota.
          </p>

          <p>
            Creemos que la música no tiene una sola forma de sentirse.
            Por eso buscamos crear un espacio donde cada persona pueda
            encontrar su propio sonido, explorar su creatividad y
            disfrutar de la experiencia musical.
          </p>

          <div className="nosotros-datos">
            <div>
              <h2>Pasión</h2>
              <p>
                Amamos la música y todo lo que la rodea.
              </p>
            </div>

            <div>
              <h2>Calidad</h2>
              <p>
                Elegimos productos pensados para músicos.
              </p>
            </div>

            <div>
              <h2>Comunidad</h2>
              <p>
                Queremos acompañarte en tu camino musical.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default QuienesSomos;
