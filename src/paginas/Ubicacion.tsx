function Ubicacion(){
    return(
        <>
            <h1>Ubicación</h1>

            <div className="ubicacion-contenido">

                <div>
                    <img src="/img/mapa_vina.jpg" alt="Mapa de Viña del Mar" />
                </div>

                <div className="ubicacion-info">

                    <h2>Encuéntranos</h2>

                    <div className="dato">
                        <div>
                            <h3>Dirección</h3>
                            <p>Viña del Mar, Chile</p>
                        </div>
                    </div>

                    <div className="dato">
                        <div>
                            <h3>Horario</h3>
                            <p>Lunes a Viernes<br />
                            09:00 - 19:00</p><br />
                            <p>Sabados<br />
                            10:00 - 16:00</p>
                        </div>
                    </div>

                    <div className="dato">
                        <div>
                            <h3>Contacto</h3>
                            <p>Teléfono: +56 9 4354 0777</p>
                            <p>Correo electrónico: sonidovivo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ubicacion;
