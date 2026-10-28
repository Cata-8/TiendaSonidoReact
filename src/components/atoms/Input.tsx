type Props = {
    tipo: string;
    nombre: string;
    valor: string; //Valor actual del campo
    alCambiar: (valor: string) => void; //funcion para actualizar el valor
    placeholder?: string;
    maxLength?: number;
    deshabilitado?: boolean;
};

function Input({tipo, nombre, valor, alCambiar, placeholder, maxLength, deshabilitado }: Props) {
    return(
        <input
            type={tipo}
            name={nombre}
            className="form-control"

            //muestra el valor guardado
            value={valor}

            placeholder={placeholder}
            maxLength={maxLength}
            disabled={deshabilitado}

            //Detecta cuando el usuario escribe
            onChange={(e) => alCambiar(e.target.value)}
        />
    );
}

export default Input;
