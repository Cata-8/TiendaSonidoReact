import Input from "../atoms/Input";

type Props = {
    etiqueta: string;
    tipo: string;
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    error?: string; //mensaje de error opcional que se muestra bajo el campo
};

function CampoFormulario({ etiqueta, tipo, nombre, valor, alCambiar, error }: Props) {
    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={nombre}>
                {etiqueta}
            </label>

            <Input 
                tipo={tipo} 
                nombre={nombre}
                valor={valor}
                alCambiar={alCambiar}
                invalido={Boolean(error)}
            />

            {error && <div className="text-danger small mt-1">{error}</div>}
        </div>
    );
}

export default CampoFormulario;
