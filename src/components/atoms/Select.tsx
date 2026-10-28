export type OpcionSelect = {
    valor: string;
    etiqueta: string;
};

type Props = {
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    opciones: OpcionSelect[];
    placeholder?: string; // primera opción vacía, ej: "Seleccione tipo de usuario"
};

function Select({ nombre, valor, alCambiar, opciones, placeholder }: Props) {
    return(
        <select
            name={nombre}
            className="form-select"
            value={valor}
            onChange={(e) => alCambiar(e.target.value)}
        >
            {placeholder !== undefined && <option value="">{placeholder}</option>}

            {opciones.map((opcion) => (
                <option key={opcion.valor} value={opcion.valor}>
                    {opcion.etiqueta}
                </option>
            ))}
        </select>
    );
}

export default Select;
