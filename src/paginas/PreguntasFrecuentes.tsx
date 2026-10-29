

const preguntas = [
  {
    pregunta: "¿Qué medios de pago aceptan?",
    respuesta:
      "Puedes revisar los medios de pago disponibles durante el proceso de compra. Las opciones se mostrarán antes de confirmar tu pedido.",
  },
  {
    pregunta: "¿Cómo puedo comprar un instrumento?",
    respuesta:
      "Entra al catálogo, selecciona el instrumento que te interesa, revisa sus características y agrégalo al carrito para continuar con tu compra.",
  },
  {
    pregunta: "¿Cómo puedo conocer las características de un instrumento?",
    respuesta:
      "En el catálogo, selecciona el botón Ver Detalle para consultar la descripción y las características del producto.",
  },
  {
    pregunta: "¿Realizan despachos a domicilio?",
    respuesta:
      "La disponibilidad y las condiciones de despacho deben revisarse durante el proceso de compra o consultarse con nuestro equipo.",
  },
  {
    pregunta: "¿Puedo devolver un producto?",
    respuesta:
      "Las condiciones de devolución dependen de las políticas de la tienda. Te recomendamos contactar al equipo antes de realizar una devolución.",
  },
  {
    pregunta: "¿Cómo puedo comunicarme con la tienda?",
    respuesta:
      "Puedes visitar la página Contacto y completar el formulario para enviar tus consultas.",
  },
];

function PreguntasFrecuentes() {
  return (
    <main className="pagina-faq">
      <section className="faq-encabezado">
        <p className="faq-etiqueta">ESTAMOS PARA AYUDARTE</p>
        <h1>Preguntas frecuentes</h1>
        <p>
          Resolvemos tus dudas para que encuentres el instrumento ideal.
        </p>
      </section>

      <section className="faq-lista">
        {preguntas.map((item, index) => (
          <details className="faq-item" key={index}>
            <summary>
              <span>{item.pregunta}</span>
              <span className="faq-icono">+</span>
            </summary>

            <p className="faq-respuesta">{item.respuesta}</p>
          </details>
        ))}
      </section>

      <section className="faq-contacto">
        <h2>¿Todavía tienes dudas?</h2>
        <p>Estamos aquí para ayudarte con tus consultas.</p>
        <a href="/contacto" className="faq-boton">
          Ir a Contacto
        </a>
      </section>
    </main>
  );
}

export default PreguntasFrecuentes;
