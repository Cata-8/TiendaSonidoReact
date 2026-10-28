import type { OpcionSelect } from "../atoms/Select";

type Props = {
    etiqueta: string;
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    tipo?: "text" | "number" | "email" | "password" | "date" | "select" | "textarea";
    opciones?: OpcionSelect[];      // solo para tipo="select"
    placeholderSelect?: string;     // primera opción vacía del select
    placeholder?: string;
    maxLength?: number;
    min?: number;
    requerido?: boolean;
    deshabilitado?: boolean;
    completo?: boolean;             // ocupa las dos columnas de la grilla
};

// Campo del panel administrador (usa las clases .admin-form-group de admin.css)
function CampoAdmin({
    etiqueta, nombre, valor, alCambiar, tipo = "text", opciones = [], placeholderSelect,
    placeholder, maxLength, min, requerido, deshabilitado, completo,
}: Props) {
    return(
        <div className={`admin-form-group${completo ? " full" : ""}`}>
            <label>{etiqueta}</label>

            {tipo === "select" ? (
                <select
                    name={nombre}
                    value={valor}
                    required={requerido}
                    disabled={deshabilitado}
                    onChange={(e) => alCambiar(e.target.value)}
                >
                    {placeholderSelect !== undefined && <option value="">{placeholderSelect}</option>}
                    {opciones.map((opcion) => (
                        <option key={opcion.valor} value={opcion.valor}>{opcion.etiqueta}</option>
                    ))}
                </select>
            ) : tipo === "textarea" ? (
                <textarea
                    name={nombre}
                    value={valor}
                    required={requerido}
                    disabled={deshabilitado}
                    onChange={(e) => alCambiar(e.target.value)}
                />
            ) : (
                <input
                    type={tipo}
                    name={nombre}
                    value={valor}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    min={min}
                    required={requerido}
                    disabled={deshabilitado}
                    onChange={(e) => alCambiar(e.target.value)}
                />
            )}
        </div>
    );
}

export default CampoAdmin;
