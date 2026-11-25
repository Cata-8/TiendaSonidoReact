import { mensajeDeError } from "../services/api";
import { productosApi } from "../services/productosApi";
import type { Producto } from "../types/Producto";
import { crearStore, useStore } from "./CrearStore";
import { useEffect } from "react";

// Misma clave que usaba el origen en el panel admin ("productosAdmin").
// Ahora es la fuente única: lo que se edita en el admin se ve en el catálogo público.
export const productosStore = crearStore<Producto[]>("productosAdmin", () => [], false);

interface EstadoCarga {
    cargado: boolean;
    cargando: boolean;
    error: string;
}

const estadoStore = crearStore<EstadoCarga>(
    "productosEstado",
    () => ({ cargado: false, cargando: false, error: "" }),
    false
);

// Pide la lista al backend. Si ya hay una petición en curso no lanza otra.
export async function cargarProductos(): Promise<void> {
    if (estadoStore.obtener().cargando) return;

    estadoStore.guardar({ cargado: estadoStore.obtener().cargado, cargando: true, error: "" });
    try {
        productosStore.guardar(await productosApi.listar());
        estadoStore.guardar({ cargado: true, cargando: false, error: "" });
    } catch (e) {
        estadoStore.guardar({ cargado: false, cargando: false, error: mensajeDeError(e) });
    }
}

export function useProductos() {
    const productos = useStore(productosStore);
    const estado = useStore(estadoStore);

    // La primera pantalla que use productos dispara la carga (el resto reutiliza lo ya cargado)
    useEffect(() => {
        const actual = estadoStore.obtener();
        if (!actual.cargado && !actual.cargando && actual.error === "") {
            void cargarProductos();
        }
    }, []);

    return {
        productos,
        cargado: estado.cargado,
        cargando: estado.cargando,
        error: estado.error,
        recargar: cargarProductos,
        buscar: (codigo: string) => productos.find((p) => p.codigo === codigo),

        // Las tres funciones lanzan ErrorApi si el backend rechaza la operación
        // (ej: 409 "Ya existe un producto con el código ..."). Quien las llama muestra el mensaje.
        crear: async (producto: Producto): Promise<void> => {
            const creado = await productosApi.crear(producto);
            productosStore.guardar([...productosStore.obtener(), creado]);
        },
        actualizar: async (producto: Producto): Promise<void> => {
            const guardado = await productosApi.actualizar(producto);
            productosStore.guardar(
                productosStore.obtener().map((p) => (p.codigo === guardado.codigo ? guardado : p))
            );
        },
        eliminar: async (codigo: string): Promise<void> => {
            await productosApi.eliminar(codigo);
            productosStore.guardar(productosStore.obtener().filter((p) => p.codigo !== codigo));
        },
    };
}
