export interface Categoria {
    slug: string;     // va en la URL: /productos/:slug
    titulo: string;   // texto que ve la persona
    filtro: string;   // se busca dentro de producto.categoria (igual que el origen: includes)
    imagen: string;   // imagen de la tarjeta en el inicio
}

// Reemplaza a las 9 páginas HTML de categoría (guitarras.html, bajos.html, ...)
export const categorias: Categoria[] = [
    { slug: "guitarras",       titulo: "Guitarras",           filtro: "Guitarras",           imagen: "/img/guitarras.jpg" },
    { slug: "bajos",           titulo: "Bajos",               filtro: "Bajos",               imagen: "/img/bajos.jpg" },
    { slug: "baterias",        titulo: "Baterías",            filtro: "Baterías",            imagen: "/img/baterias.jpg" },
    { slug: "teclados",        titulo: "Teclados y Pianos",   filtro: "Teclados y Pianos",   imagen: "/img/teclados_y_pianos.jpg" },
    { slug: "amplificadores",  titulo: "Amplificadores",      filtro: "Amplificadores",      imagen: "/img/amplificadores.jpg" },
    { slug: "microfonos",      titulo: "Micrófonos",          filtro: "Micrófonos",          imagen: "/img/microfono.jpg" },
    { slug: "pedales",         titulo: "Pedales de Efectos",  filtro: "Pedales de Efectos",  imagen: "/img/pedales.jpg" },
    { slug: "accesorios",      titulo: "Accesorios",          filtro: "Accesorios",          imagen: "/img/accesorios.jpg" },
    { slug: "estudio",         titulo: "Estudio y Grabación", filtro: "Estudio y Grabación", imagen: "/img/estudio.jpg" },
];

// Opciones del <select> de categoría en el mantenedor de productos
export const categoriasProducto: string[] = [
    "Guitarras Acústicas",
    "Guitarras Eléctricas",
    "Bajos Eléctricos",
    "Baterías",
    "Teclados y Pianos",
    "Amplificadores",
    "Micrófonos",
    "Pedales de Efectos",
    "Accesorios",
    "Estudio y Grabación",
];
