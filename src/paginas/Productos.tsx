import CardProducto from "../components/molecules/CardProducto";

function Productos(){

    return(
        <div className="contenedor-productos">
            <h1>Productos</h1>
                <div className="d-flex gap-3">{/* Clase de bootstrap que permite que las Cards se vean horizontalmente */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 grilla-cards">
                    
                        <CardProducto
                         id="GA001"
                         marca="Yamaha"
                         titulo="Guitarra Acústica Folk"
                         descripcion="Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes"
                         precio={129990}
                         imagen="/img/Guitarra_Acustica_Folk_Yamaha.jpg"
                        />
                        <CardProducto
                         id="GA002"
                         marca="Fender"
                         titulo="Guitarra Acústica Dreadnought"
                         descripcion="Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado"
                         precio={189990}
                         imagen="/img/Guitarra_Acustica_Dreadnought_Fender.webp"
                        />
                        <CardProducto
                         id="GA003"
                         marca="Yamaha"
                         titulo="Guitarra Acústica Clásica 4/4"
                         descripcion="Nailon, tapa de abeto. Ideal para estudio y flamenco"
                         precio={89990}
                         imagen="/img/Guitarra_Acustica_Clasica_44_Yamaha.webp"
                        />
                        <CardProducto
                         id="GA004"
                         marca="Takamine"
                         titulo="Guitarra Electroacústica"
                         descripcion="Pickup integrado, afinador incorporado"
                         precio={349990}
                         imagen="/img/Guitarra_Electroacustica_Takamine.webp"
                        />
                        <CardProducto
                         id="GE001"
                         marca="Squier"
                         titulo="Guitarra Eléctrica Stratocaster"
                         descripcion="Cuerpo de álamo, mástil de arce y tres pastillas."
                         precio={249990}
                         imagen="/img/Guitarra_Electrica_Stratocaster_Squier.webp"
                        />

                        <CardProducto
                         id="GE002"
                         marca="Epiphone"
                         titulo="Guitarra Eléctrica Les Paul"
                         descripcion="Cuerpo de caoba y pastillas humbucker."
                         precio={329990}
                         imagen="/img/Guitarra_Electrica_Les_Paul_Epiphone.jpg"
                        />

                        <CardProducto
                         id="BA001"
                         marca="Squier"
                         titulo="Bajo Eléctrico de 4 Cuerdas"
                         descripcion="Bajo eléctrico versátil para comenzar a tocar."
                         precio={299990}
                         imagen="/img/Bajo_Electrico_4_Cuerdas_Squier.webp"
                        />

                        <CardProducto
                            id="BT002"
                            marca="Roland"
                            titulo="Batería Electrónica de 8 Pads"
                            descripcion="Batería electrónica para practicar y grabar."
                            precio={799990}
                            imagen="/img/Bateria_Electronica_8_pads_Roland.jpg"
                        />

                        <CardProducto
                            id="AM001"
                            marca="Fender"
                            titulo="Amplificador de Guitarra 15W"
                            descripcion="Amplificador de 15W con entrada auxiliar."
                            precio={99990}
                            imagen="/img/Amplificador_Guitarra_15W_Fender.jpg"
                        />

                        <CardProducto
                            id="TC003"
                            marca="Arturia"
                            titulo="Sintetizador de 49 Teclas"
                            descripcion="Controlador MIDI para producción musical."
                            precio={129990}
                            imagen="/img/Sintetizador_49_teclas_Arturia.jpg"
                        />
                        
                    </div>
                </div>
        </div>
    )
}

export default Productos;