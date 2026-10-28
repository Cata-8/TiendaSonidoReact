export interface Producto {
    codigo: string;
    categoria: string;
    nombre: string;
    marca: string;
    modelo: string;
    stock: number;
    precio: number;
    descripcion: string;
    imagen: string;
}

export interface ItemCarrito {
    codigo: string;
    nombre: string;
    marca: string;
    modelo: string;
    precio: number;
    imagen: string;
    cantidad: number;
}
