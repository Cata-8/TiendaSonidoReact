export type Rol = "admin" | "cliente";

export interface Usuario {
    id: number;
    run: string;
    nombre: string;
    apellidos: string;
    correo: string;
    fechaNacimiento: string;
    rol: Rol;
    region: string;
    comuna: string;
    direccion: string;
    // El backend NUNCA devuelve la clave; solo se usa al enviar el formulario (crear/editar)
    clave?: string;
}

// Lo que escribe la persona en los formularios (sin id)
export type DatosUsuario = Omit<Usuario, "id" | "clave"> & { clave: string };
