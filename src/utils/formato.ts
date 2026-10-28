// "$129.990" (formato chileno, igual que toLocaleString('es-CL') del origen)
export function formatearPrecio(valor: number): string {
    return "$" + valor.toLocaleString("es-CL");
}
