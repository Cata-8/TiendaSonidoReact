
import "../css/Ubicacion.css";

function Ubicacion() {
  return (
    <main className="pagina-ubicacion">
      <div className="ubicacion-contenedor">
        <header className="ubicacion-encabezado">
          

          <h1> <span>ENCUÉNTRANOS</span></h1>

          <p>
            Queremos ayudarte a encontrar el instrumento ideal.
            Conoce dónde estamos y cómo puedes comunicarte con nosotros.
          </p>
        </header>

        <section className="ubicacion-contenido">
          <div className="ubicacion-informacion">
            <h2>Visítanos</h2>

            <div className="ubicacion-dato">
              <h3>Dirección</h3>
              <p>
                Viña del Mar, Chile
              </p>
            </div>

            <div className="ubicacion-dato">
              <h3>Horario</h3>
              <p>Lunes a Viernes<br/>
                    09:00 - 19:00</p><br/>
                    <p>Sabados<br/>
                    10:00 - 16:00</p>
            </div>

            <div className="ubicacion-dato">
              <h3>Contactanos por correo o teléfono</h3>
              <p>
                  contacto@sonidovivo.cl
                <br/> <br/>
                  +56 9 4354 0777
              </p>
            </div>
          </div>

          <div className="ubicacion-mapa">
            <img
              src="/img/mapa_vina.jpg"
              alt="Imagen de nuestra tienda"
            />
          </div>
        </section>

        <section className="ubicacion-mensaje">
          <p>
            ¿Tienes dudas antes de visitarnos? Escríbenos desde
            nuestra sección de contacto y estaremos encantados de ayudarte.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Ubicacion;
