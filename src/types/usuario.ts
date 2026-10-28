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
    clave: string;
}

// Lo que escribe la persona en los formularios (sin id)
export type DatosUsuario = Omit<Usuario, "id">;
