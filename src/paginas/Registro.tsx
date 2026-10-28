
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Registro.css";

interface ErroresRegistro {
  nombre?: string;
  correo?: string;
  contrasena?: string;
  confirmarContrasena?: string;
}

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const validarFormulario = (): ErroresRegistro => {
    const nuevosErrores: ErroresRegistro = {};

    const nombreLimpio = nombre.trim();
    const correoLimpio = correo.trim();

    // Validar nombre
    if (!nombreLimpio) {
      nuevosErrores.nombre = "Debe ingresar su nombre.";
    } else if (nombreLimpio.length < 3) {
      nuevosErrores.nombre =
        "El nombre debe tener al menos 3 caracteres.";
    } else if (
      !/^[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*$/u.test(nombreLimpio)
    ) {
      nuevosErrores.nombre =
        "Ingrese un nombre válido, sin números ni símbolos.";
    }

    // Validar correo
    if (!correoLimpio) {
      nuevosErrores.correo = "Debe ingresar su correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoLimpio)) {
      nuevosErrores.correo =
        "Ingrese un correo válido, por ejemplo nombre@correo.cl.";
    }

    // Validar contraseña
    if (!contrasena) {
      nuevosErrores.contrasena = "Debe ingresar una contraseña.";
    } else if (contrasena.length < 8) {
      nuevosErrores.contrasena =
        "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[A-ZÁÉÍÓÚÜÑ]/.test(contrasena)) {
      nuevosErrores.contrasena =
        "La contraseña debe incluir al menos una mayúscula.";
    } else if (!/[a-záéíóúüñ]/.test(contrasena)) {
      nuevosErrores.contrasena =
        "La contraseña debe incluir al menos una minúscula.";
    } else if (!/[0-9]/.test(contrasena)) {
      nuevosErrores.contrasena =
        "La contraseña debe incluir al menos un número.";
    } else if (!/[^A-Za-z0-9ÁÉÍÓÚÜÑáéíóúüñ]/.test(contrasena)) {
      nuevosErrores.contrasena =
        "La contraseña debe incluir al menos un símbolo, por ejemplo ! o #.";
    }

    // Validar confirmación de contraseña
    if (!confirmarContrasena) {
      nuevosErrores.confirmarContrasena =
        "Debe confirmar su contraseña.";
    } else if (contrasena !== confirmarContrasena) {
      nuevosErrores.confirmarContrasena =
        "Las contraseñas no coinciden.";
    }

    return nuevosErrores;
  };

  const manejarRegistro = (
    evento: Parameters<
      NonNullable<React.ComponentProps<"form">["onSubmit"]>
    >[0]
  ) => {
    evento.preventDefault();

    const nuevosErrores = validarFormulario();

    // Mostrar solamente el primer error mediante una ventana emergente
    if (nuevosErrores.nombre) {
      alert(nuevosErrores.nombre);
      return;
    }

    if (nuevosErrores.correo) {
      alert(nuevosErrores.correo);
      return;
    }

    if (nuevosErrores.contrasena) {
      alert(nuevosErrores.contrasena);
      return;
    }

    if (nuevosErrores.confirmarContrasena) {
      alert(nuevosErrores.confirmarContrasena);
      return;
    }

    alert(
      "Los datos son válidos. Aún falta implementar el guardado de la cuenta."
    );
  };

  return (
    <main className="registro-pagina">
      <section className="registro-contenedor">
        <h1>Crear cuenta</h1>

        <p className="registro-descripcion">
          Únete a la comunidad de Sonido Vivo
        </p>

        <form onSubmit={manejarRegistro} noValidate>
          <div className="registro-grupo">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className="registro-grupo">
            <label htmlFor="correo-registro">
              Correo electrónico
            </label>
            <input
              id="correo-registro"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="registro-grupo">
            <label htmlFor="contrasena-registro">Contraseña</label>
            <input
              id="contrasena-registro"
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <div className="registro-grupo">
            <label htmlFor="confirmar-contrasena">
              Confirmar contraseña
            </label>
            <input
              id="confirmar-contrasena"
              type="password"
              value={confirmarContrasena}
              onChange={(e) =>
                setConfirmarContrasena(e.target.value)
              }
              autoComplete="new-password"
            />
          </div>

          <button className="registro-boton" type="submit">
            Registrarme
          </button>
        </form>

        <p className="registro-login">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Inicia sesión</Link>
        </p>
      </section>
    </main>
  );
}

export default Registro;
