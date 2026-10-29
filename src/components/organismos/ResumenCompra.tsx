import { formatearPrecio } from "../../utils/Formato";

interface ResumenCompraProps{
    unidades: number;
    total: number;
    alComprar: () => void;
}

function ResumenCompra({ unidades, total, alComprar }: ResumenCompraProps) {
    return(
        <aside className="resumen-compra">
            <h2>Resumen de compra</h2>

            <div className="resumen-linea">
                <span>Subtotal ({unidades} productos)</span>
                <span>{formatearPrecio(total)}</span>
            </div>

            <div className="resumen-linea">
                <span>Envío</span>
                <span className="envio-gratis">Gratis</span>
            </div>

            <hr />

            <div className="resumen-linea resumen-total">
                <span>Total</span>
                <span>{formatearPrecio(total)}</span>
            </div>

            <button type="button" className="btn-comprar" onClick={alComprar}>
                <i className="bi bi-cart-fill"></i> COMPRAR
            </button>

            <p className="compra-segura">
                <i className="bi bi-shield-check"></i>
                {" "}Compra segura<br />
                <small>Tus datos están protegidos</small>
            </p>
        </aside>
    )
}

export default ResumenCompra;
