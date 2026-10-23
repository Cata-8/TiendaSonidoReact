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
                            id="GA005"
                            marca="Yamaha"
                            titulo="Guitarra 3/4 Niños"
                            descripcion="Tamaño reducido para niños de 6 a 10 años"
                            precio={79990}
                            imagen="/img/Guitarra_34_Ninos_Yamaha.webp"
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
                            id="GE003"
                            marca="Epiphone"
                            titulo="Guitarra Eléctrica SG"
                            descripcion="Cuerpo caoba, mástil caoba, 2 humbuckers"
                            precio={319990}
                            imagen="/img/Guitarra_Electrica_SG_Epiphone.jpg"
                        />

                        <CardProducto
                            id="GE004"
                            marca="Squier"
                            titulo="Guitarra Eléctrica Telecaster"
                            descripcion="Cuerpo álamo, clavijero vintage, 2 pastillas single"
                            precio={239990}
                            imagen="/img/Guitarra_Electrica_Telecaster_Squier.webp"
                        />

                        <CardProducto
                            id="GE005"
                            marca="Epiphone"
                            titulo="Guitarra Eléctrica Semi-hollow"
                            descripcion="Semi-hueca, 2 humbuckers, ideal para jazz y blues"
                            precio={549990}
                            imagen="/img/Guitarra_Electrica_Semi-hollow_Epiphone.jpg"
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
                            id="BA002"
                            marca="Fender"
                            titulo="Bajo Eléctrico Jazz Bass"
                            descripcion="Alder body, 2 Alnico V Jazz single-coil"
                            precio={699990}
                            imagen="/img/Bajo_Electrico_Jazz_Bass_Fender.webp"
                        />

                        <CardProducto
                            id="BA003"
                            marca="Yamaha"
                            titulo="Bajo Acústico 4 Cuerdas"
                            descripcion="Electroacústico, afinador incorporado"
                            precio={429990}
                            imagen="/img/Bajo_Acustico_4_Cuerdas_Yamaha.jpg"
                        />
                        <CardProducto
                            id="BT001"
                            marca="Pearl"
                            titulo="Batería Acústica 5 piezas"
                            descripcion="Incluye stands, platillos y pedal de bombo"
                            precio={599990}
                            imagen="/img/Bateria_Acustica_5_piezas_Pearl.jpeg"
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
                            id="BT003"
                            marca="Pearl"
                            titulo="Caja Snare 14''"
                            descripcion="Acero, 14x5\, 10 tensores"
                            precio={89990}
                            imagen="/img/Caja_Snare_14_Pearl.jpg"
                        />

                        <CardProducto
                            id="BT004"
                            marca="Zildjian"
                            titulo="Platillo Hi-Hat 14''"
                            descripcion="Latón B20, sonido brillante y claro"
                            precio={149990}
                            imagen="/img/Platillo_Hi-Hat_14_Zildjian.jpg"
                        />

                        <CardProducto
                            id="BT005"
                            marca="Zildjian"
                            titulo="Platillo Crash 16''"
                            descripcion="Latón B20, ataque rápido"
                            precio={129990}
                            imagen="/img/Platillo_Crash_16Zildjian.jpg"
                        />
                        <CardProducto
                            id="TC001"
                            marca="Yamaha"
                            titulo="Teclado Digital 61 teclas"
                            descripcion="61 teclas sensibles al tacto, 622 voces"
                            precio={249990}
                            imagen="/img/Teclado_Digital_61_teclas_Yamaha.webp"
                        />

                        <CardProducto
                            id="TC002"
                            marca="Yamaha"
                            titulo="Piano Digital 88 teclas"
                            descripcion="88 teclas pesadas, 10 voces, pedal sustain incluido"
                            precio={499990}
                            imagen="/img/Piano_Digital_88_teclas_Yamaha.jpg"
                        />

                        <CardProducto
                            id="TC003"
                            marca="Arturia"
                            titulo="Sintetizador 49 teclas"
                            descripcion="MIDI controller, 49 mini teclas"
                            precio={129990}
                            imagen="/img/Sintetizador_49_teclas_Arturia.jpg"
                        />

                        <CardProducto
                            id="TC004"
                            marca="M-Audio"
                            titulo="Teclado MIDI 88 teclas"
                            descripcion="88 teclas martillo, sin sonidos propios"
                            precio={399990}
                            imagen="/img/Teclado_MIDI_88_teclas_M-Audio.webp"
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
                            id="AM002"
                            marca="Marshall"
                            titulo="Amplificador Guitarra 40W"
                            descripcion="40W, 4 canales, efectos digitales integrados"
                            precio={299990}
                            imagen="/img/Amplificador_Guitarra_40W_Marshall.webp"
                        />

                        <CardProducto
                            id="AM003"
                            marca="Hartke"
                            titulo="Amplificador Bajo 100W"
                            descripcion="100W, tweeter integrado, ecualizador de 4 bandas"
                            precio={449990}
                            imagen="/img/Amplificador_Bajo_100W_Hartke.webp"
                        />

                        <CardProducto
                            id="AM004"
                            marca="Fishman"
                            titulo="Amplificador Acústico 40W"
                            descripcion="60W, 2 canales, reverb y chorus incorporados"
                            precio={499990}
                            imagen="/img/Amplificador_Acustico_40W_Fishman.jpg"
                        />

                        <CardProducto
                            id="MI001"
                            marca="Shure"
                            titulo="Micrófono Dinámico Cardioide"
                            descripcion="Estándar industria para voz en vivo"
                            precio={149990}
                            imagen="/img/Microfono_Dinamico_Cardioide_Shure.jpg"
                        />
                        <CardProducto
                            id="MI002"
                            marca="Shure"
                            titulo="Micrófono Dinámico Instrumento"
                            descripcion="Ideal para captura de instrumentos y amplificadores"
                            precio={139990}
                            imagen="/img/Microfono_Dinamico_Instrumento_Shure.jpg"
                        />
                        <CardProducto
                            id="MI003"
                            marca="Audio-Tech."
                            titulo="Micrófono Condensador"
                            descripcion="Cardioide, XLR, ideal para grabación en estudio"
                            precio={199990}
                            imagen="/img/Microfono_Condensador_Audio-Tech.webp"
                        />
                        <CardProducto
                            id="MI004"
                            marca="Blue"
                            titulo="Micrófono USB de Condensador"
                            descripcion="USB, 4 patrones polares, ideal para streaming y podcast"
                            precio={299990}
                            imagen="/img/Microfono_USB_de_Condensador_Blue.jpg"
                        />
                        <CardProducto
                            id="PE001"
                            marca="Boss"
                            titulo="Pedal Distorsión"
                            descripcion="Clásico pedal de distorsión, 3 controles"
                            precio={79990}
                            imagen="/img/Pedal_Distorsion_Boss.jpg"
                        />

                        <CardProducto
                            id="PE002"
                            marca="Boss"
                            titulo="Pedal Reverb"
                            descripcion="8 modos de reverb, control de shimmer"
                            precio={179990}
                            imagen="/img/Pedal_Reverb_Boss.webp"
                        />

                        <CardProducto
                            id="PE003"
                            marca="Boss"
                            titulo="Pedal Multi-efectos"
                            descripcion="Diseño tipo pedalboard, 8 efectos simultáneos"
                            precio={349990}
                            imagen="/img/Pedal_Multi-efectos_Boss.jpg"
                        />

                        <CardProducto
                            id="PE004"
                            marca="Boss"
                            titulo="Pedal Tuner Cromático"
                            descripcion="Afinador cromático, indicador de tono"
                            precio={89990}
                            imagen="/img/Pedal_Tuner_Cromatico_Boss.jpg"
                        />

                        <CardProducto
                            id="PE005"
                            marca="MXR"
                            titulo="Pedal Delay"
                            descripcion="Delay analógico cálido, tiempo 600ms"
                            precio={179990}
                            imagen="/img/Pedal_Delay_MXR.jpg"
                        />

                        <CardProducto
                            id="PE006"
                            marca="Ibanez"
                            titulo="Pedal Overdrive"
                            descripcion="Tube Screamer clásico, sonido suave y orgánico"
                            precio={99990}
                            imagen="/img/Pedal_Overdrive_Ibanez.jpg"
                        />

                        <CardProducto
                            id="AC001"
                            marca="Ernie Ball"
                            titulo="Cuerdas Guitarra Eléctrica 09-42"
                            descripcion="Juego 6 cuerdas, calibre ligero"
                            precio={8990}
                            imagen="/img/Cuerdas_Guitarra_Electrica_09_42_Ernie_Ball.jpg"
                        />

                        <CardProducto
                            id="AC002"
                            marca="Ernie Ball"
                            titulo="Cuerdas Guitarra Acústica 12-53"
                            descripcion="Bronce fósforo, sonido cálido"
                            precio={10990}
                            imagen="/img/Cuerdas_Guitarra_Acustica_12_53_Ernie_Ball.jpg"
                        />

                        <CardProducto
                            id="AC003"
                            marca="Ernie Ball"
                            titulo="Cuerdas Bajo 45-105"
                            descripcion="Cuerdas de níquel enrollado, set 4 cuerdas"
                            precio={14990}
                            imagen="/img/Cuerdas_Bajo_45_105_Ernie_Ball.jpg"
                        />

                        <CardProducto
                            id="AC004"
                            marca="Fender"
                            titulo="Púas de Guitarra x10 (0.73mm)"
                            descripcion="Celulosa, grosor medio"
                            precio={3990}
                            imagen="/img/Puas_de_Guitarra_x10_0_73mm_Fender.jpg"
                        />

                        <CardProducto
                            id="AC005"
                            marca="Dunlop"
                            titulo="Capotraste Guitarra"
                            descripcion="Capotraste de resorte, compatible 6 cuerdas"
                            precio={12990}
                            imagen="/img/Capotraste_Guitarra_Dunlop.jpg"
                        />

                        <CardProducto
                            id="AC006"
                            marca="Snark"
                            titulo="Afinador de Clip"
                            descripcion="Afinador cromático de clip, pantalla giratoria"
                            precio={8990}
                            imagen="/img/Afinador_de_Clip_Snark.jpg"
                        />

                        <CardProducto
                            id="AC007"
                            marca="Monster"
                            titulo="Cable Instrumento 3m"
                            descripcion="Cable trenzado, conectores dorados, 3 metros"
                            precio={12990}
                            imagen="/img/Cable_Instrumento_3m_Monster.jpg"
                        />

                        <CardProducto
                            id="AC008"
                            marca="Monster"
                            titulo="Cable Instrumento 6m"
                            descripcion="Cable trenzado, conectores dorados, 6 metros"
                            precio={17990}
                            imagen="/img/Cable_Instrumento_6m_Monster.jpg"
                        />

                        <CardProducto
                            id="AC009"
                            marca="Hercules"
                            titulo="Soporte Guitarra de Piso"
                            descripcion="Soporte plegable con enganche automático"
                            precio={22990}
                            imagen="/img/Soporte_Guitarra_de_Piso_Hercules.jpg"
                        />

                        <CardProducto
                            id="AC010"
                            marca="Hercules"
                            titulo="Soporte Guitarra de Pared"
                            descripcion="Montaje a pared, enganche automático"
                            precio={18990}
                            imagen="/img/Soporte_Guitarra_de_Pared_Hercules.jpg"
                        />

                        <CardProducto
                            id="ES001"
                            marca="Focusrite"
                            titulo="Interfaz de Audio 2x2 USB"
                            descripcion="1 entrada XLR+instrumento, 2 salidas, 24bit/192kHz"
                            precio={149990}
                            imagen="/img/Interfaz_de_Audio_2x2_USB_Focusrite.jpg"
                        />

                        <CardProducto
                            id="ES002"
                            marca="Audio-Tech."
                            titulo="Auriculares de Estudio"
                            descripcion="Circumaurales, respuesta 15Hz-20kHz"
                            precio={79990}
                            imagen="/img/Auriculares_de_Estudio_Audio_Tech.jpg"
                        />

                        <CardProducto
                            id="ES003"
                            marca="Audio-Tech."
                            titulo="Auriculares de Estudio Pro"
                            descripcion="Referencia de industria, sonido neutro y detallado"
                            precio={219990}
                            imagen="/img/Auriculares_de_Estudio_Pro_Audio_Tech.jpg"
                        />

                        <CardProducto
                            id="ES004"
                            marca="Yamaha"
                            titulo="Monitor de Estudio 5''"
                            descripcion="Altavoz activo, respuesta plana, ideal mezcla"
                            precio={349990}
                            imagen="/img/Monitor_de_Estudio_5_Yamaha.jpg"
                        />

                        <CardProducto
                            id="ES005"
                            marca="Sennheiser"
                            titulo="Pop Filter para Micrófono"
                            descripcion="Doble malla, brazo flexible con clip"
                            precio={14990}
                            imagen="/img/Pop_Filter_para_Microfono_Sennheiser.jpg"
                        />
                        
                    </div>
                </div>
        </div>
    )
}

export default Productos;