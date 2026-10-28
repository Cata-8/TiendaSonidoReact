type Props = {
    tipo: string;
    nombre: string;
    valor: string; //Valor actual del campo
    alCambiar: (valor: string) => void;
    invalido?: boolean;
};

function Input({tipo, nombre, valor, alCambiar, invalido = false }: Props) {
    return(
        <input
            id={nombre}
            type={tipo}
            name={nombre}
            className={`form-control ${invalido ? "is-invalid" : ""}`}

            //muestra el valor guardado
            value={valor}

            //Detecta cuando el usuario escribe
            onChange={(e) => alCambiar(e.target.value)}
        />
    );
}

export default Input;