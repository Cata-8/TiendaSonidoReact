import FormularioContacto from "./FormularioContacto";

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-contenido">

                <div className="footer-columna logo-footer">
                    <h2>SONIDO VIVO</h2>
                    <p>Instrumentos para almas nocturnas</p>
                </div>

                <div className="footer-columna">
                    <h3>INFORMACIÓN</h3>

                    <a href="#">Términos y condiciones</a>{" "}
                    <a href="#">Cambios y devoluciones</a>{" "}
                    <a href="#">Preguntas frecuentes</a>
                </div>

                <div className="footer-columna">
                    <h3>CONTÁCTANOS</h3>

                    <FormularioContacto />
                </div>

            </div>

            <div className="footer-final">
                © 2026 Sonido Vivo – Instrumentos para almas nocturnas
            </div>
        </footer>
    )
}

export default Footer
