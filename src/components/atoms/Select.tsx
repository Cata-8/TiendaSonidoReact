type Props = {
    nombre: string;
    valor: string;
    opciones: string[];
    alCambiar: (valor: string) => void;
    invalido?: boolean;
};

function Select({ nombre, valor, opciones, alCambiar, invalido = false }: Props) {
    return(
        <select
            id={nombre}
            name={nombre}
            className={`form-select ${invalido ? "is-invalid" : ""}`}
            value={valor}
            onChange={(e) => alCambiar(e.target.value)}
        >
            <option value="">Seleccione...</option>
            {opciones.map((opcion) => (
                <option key={opcion} value={opcion}>
                    {opcion}
                </option>
            ))}
        </select>
    );
}

export default Select;
