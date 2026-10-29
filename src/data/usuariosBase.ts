import type { Usuario } from "../types/Usuario";

// Usuarios iniciales (migrados de admin.js -> inicializarUsuarios y de usuario.js -> sesion).
// Las credenciales son las mismas que validaba login.js.
export const usuariosBase: Usuario[] = [
    {
        id: 1,
        run: "",
        nombre: "Administrador",
        apellidos: "",
        correo: "sonidovivo@gmail.cl",
        fechaNacimiento: "",
        rol: "admin",
        region: "",
        comuna: "",
        direccion: "",
        clave: "1234",
    },
    {
        id: 2,
        run: "123456789",
        nombre: "Usuario",
        apellidos: "Ejemplo",
        correo: "usuario@gmail.cl",
        fechaNacimiento: "1998-05-14",
        rol: "cliente",
        region: "Región Metropolitana de Santiago",
        comuna: "Santiago",
        direccion: "Calle Hola 456",
        clave: "5678",
    },
];
