import type { ResultadoValidacion } from "./Validaciones";

export interface DatosPago {
    titular: string;
    numero: string;       // con o sin espacios
    vencimiento: string;  // MM/AA
    cvv: string;
}

// "1234567890123456" -> "1234 5678 9012 3456" (solo deja dígitos, máximo 16)
export function formatearNumeroTarjeta(valor: string): string {
    const digitos = valor.replace(/\D/g, "").slice(0, 16);
    return digitos.replace(/(.{4})/g, "$1 ").trim();
}

// "1229" -> "12/29"
export function formatearVencimiento(valor: string): string {
    const digitos = valor.replace(/\D/g, "").slice(0, 4);
    return digitos.length > 2 ? digitos.slice(0, 2) + "/" + digitos.slice(2) : digitos;
}

// Simulación: una tarjeta que termina en 0000 es "rechazada por el banco"
export function tarjetaRechazada(numero: string): boolean {
    return numero.replace(/\D/g, "").endsWith("0000");
}

export function validarPago(datos: DatosPago, ahora: Date = new Date()): ResultadoValidacion {
    const error = (mensaje: string) => ({ valido: false, mensaje });

    if (datos.titular.trim().length < 3) {
        return error("Ingresa el nombre del titular de la tarjeta");
    }

    if (datos.numero.replace(/\D/g, "").length !== 16) {
        return error("El número de tarjeta debe tener 16 dígitos");
    }

    const vence = /^(\d{2})\/(\d{2})$/.exec(datos.vencimiento);
    const mes = vence ? Number(vence[1]) : 0;
    if (!vence || mes < 1 || mes > 12) {
        return error("Ingresa un vencimiento válido (MM/AA)");
    }

    const anio = 2000 + Number(vence[2]);
    if (anio < ahora.getFullYear() || (anio === ahora.getFullYear() && mes < ahora.getMonth() + 1)) {
        return error("La tarjeta está vencida");
    }

    if (!/^\d{3}$/.test(datos.cvv)) {
        return error("El CVV debe tener 3 dígitos");
    }

    return { valido: true, mensaje: "" };
}