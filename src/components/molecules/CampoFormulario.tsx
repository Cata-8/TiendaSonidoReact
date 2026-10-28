import Input from "../atoms/Input";
import Select from "../atoms/Select";
import type { OpcionSelect } from "../atoms/Select";

type Props = {
    etiqueta: string;
    tipo: string;
    nombre: string;
    valor: string;
    alCambiar: (valor: string) => void;
    placeholder?: string;
    maxLength?: number;
    opciones?: OpcionSelect[]; // si viene, el campo es un <select> en vez de un <input>
};

function CampoFormulario({ etiqueta, tipo, nombre, valor, alCambiar, placeholder, maxLength, opciones }: Props) {
    return(
        <div className="mb-3">
            <label className="form-label">
                {etiqueta}
            </label>

            {opciones ? (
                <Select
                    nombre={nombre}
                    valor={valor}
                    alCambiar={alCambiar}
                    opciones={opciones}
                    placeholder={placeholder}
                />
            ) : (
                <Input
                    tipo={tipo}
                    nombre={nombre}
                    valor={valor}
                    alCambiar={alCambiar}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
            )}
        </div>
    );
}

export default CampoFormulario;
