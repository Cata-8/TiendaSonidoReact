import Select from "../atoms/Select";

type Props = {
    etiqueta: string;
    nombre: string;
    valor: string;
    opciones: string[];
    alCambiar: (valor: string) => void;
    error?: string;
};

function CampoSelect({ etiqueta, nombre, valor, opciones, alCambiar, error }: Props) {
    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={nombre}>
                {etiqueta}
            </label>

            <Select
                nombre={nombre}
                valor={valor}
                opciones={opciones}
                alCambiar={alCambiar}
                invalido={Boolean(error)}
            />

            {error && <div className="text-danger small mt-1">{error}</div>}
        </div>
    );
}

export default CampoSelect;
