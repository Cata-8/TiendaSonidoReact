import { useSyncExternalStore } from "react";

export interface Store<T> {
    obtener: () => T;
    guardar: (nuevo: T) => void;
    restablecer: () => void;
    suscribir: (oyente: () => void) => () => void;
}

// Pequeño store persistido en localStorage. Reemplaza los
// JSON.parse(localStorage.getItem(...)) / localStorage.setItem(...) repartidos en el origen.
export function crearStore<T>(clave: string, valorInicial: () => T): Store<T> {
    const oyentes = new Set<() => void>();

    function leer(): T {
        try {
            const crudo = localStorage.getItem(clave);
            if (crudo !== null) return JSON.parse(crudo) as T;
        } catch {
            // sin localStorage o JSON dañado: se usa el valor inicial
        }
        return valorInicial();
    }

    let estado: T = leer();

    function guardar(nuevo: T) {
        estado = nuevo;
        try {
            localStorage.setItem(clave, JSON.stringify(nuevo));
        } catch {
            // si no se puede persistir, igual queda en memoria
        }
        oyentes.forEach((oyente) => oyente());
    }

    return {
        obtener: () => estado,
        guardar,
        restablecer: () => guardar(valorInicial()),
        suscribir: (oyente) => {
            oyentes.add(oyente);
            return () => {
                oyentes.delete(oyente);
            };
        },
    };
}

export function useStore<T>(store: Store<T>): T {
    return useSyncExternalStore(store.suscribir, store.obtener, store.obtener);
}
