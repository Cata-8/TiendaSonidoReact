import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CampoFormulario from "../components/molecules/CampoFormulario";
import { mensajeDeError } from "../services/api";
import { pedidosApi } from "../services/pedidosApi";
import { useCarrito } from "../store/carrito";
import { cargarProductos } from "../store/productos";
import { useSesion } from "../store/sesion";
import { formatearPrecio } from "../utils/Formato";
import {
    formatearNumeroTarjeta,
    formatearVencimiento,
    tarjetaRechazada,
    validarPago,
} from "../utils/Pago";

type Estado = "formulario" | "procesando" | "aprobado";

interface Pedido {
    numero: string;
    total: number;
    unidades: number;
}

// Pantalla de pago SIMULADA: no se guarda ni se envía ningún dato de la tarjeta
function Pago(){
    const { items, total, vaciar } = useCarrito();
    const { usuario } = useSesion();

    const [titular, setTitular] = useState("");
    const [numero, setNumero] = useState("");
    const [vencimiento, setVencimiento] = useState("");
    const [cvv, setCvv] = useState("");

    const [estado, setEstado] = useState<Estado>("formulario");
    const [error, setError] = useState("");
    const [pedido, setPedido] = useState<Pedido | null>(null);

    // Sin productos no hay nada que pagar (salvo la pantalla final, cuando el carrito ya se vació)
    if (items.length === 0 && estado !== "aprobado") {
        return <Navigate to="/carrito" replace />;
    }

    const pagar = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const resultado = validarPago({ titular, numero, vencimiento, cvv });
        if (!resultado.valido) {
            setError(resultado.mensaje);
            return;
        }

        setError("");
        setEstado("procesando");

        // Simula el tiempo que demora el banco en responder (la tarjeta sigue siendo simulada)
        await new Promise((resolver) => setTimeout(resolver, 1500));

        if (tarjetaRechazada(numero)) {
            setError("El banco rechazó el pago. Prueba con otra tarjeta.");
            setEstado("formulario");
            return;
        }

        try {
            // POST /api/pedidos: el servidor valida usuario y stock, calcula el total,
            // descuenta el stock en catálogo y guarda el pedido. Solo viajan código y cantidad.
            const creado = await pedidosApi.crear(usuario?.id ?? null, items);

            setPedido({ numero: creado.numero, total: creado.total, unidades: creado.unidades });
            setEstado("aprobado");
            vaciar();
            void cargarProductos(); // el stock cambió: se vuelve a pedir el catálogo
        } catch (e) {
            // ej: 409 "Stock insuficiente para ...", 503 "El servicio de catálogo no está disponible"
            setError(mensajeDeError(e));
            setEstado("formulario");
        }
    };

    if (estado === "aprobado" && pedido) {
        return(
            <div className="container pago-exito">
                <div className="login login-ancho text-center">
                    <i className="bi bi-check-circle-fill pago-icono"></i>
                    <h1>¡Pago aprobado!</h1>

                    <p>Pedido N° <strong>{pedido.numero}</strong></p>
                    <p>
                        {pedido.unidades} {pedido.unidades === 1 ? "producto" : "productos"} ·
                        Total pagado <strong>{formatearPrecio(pedido.total)}</strong>
                    </p>
                    <p>Gracias por tu compra en Sonido Vivo.</p>

                    <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    return(
        <>
            <div className="carrito-div">
                <h1>Pago</h1>
                <p className="carrito-subtitulo">Ingresa los datos de tu tarjeta</p>
            </div>

            <div className="pago-layout">

                <div className="login">
                    <form onSubmit={pagar} noValidate>

                        <CampoFormulario
                            etiqueta="Nombre del titular"
                            tipo="text"
                            nombre="titular"
                            valor={titular}
                            alCambiar={setTitular}
                            placeholder="Como aparece en la tarjeta"
                        />

                        <CampoFormulario
                            etiqueta="Número de tarjeta"
                            tipo="text"
                            nombre="numero"
                            valor={numero}
                            alCambiar={(valor) => setNumero(formatearNumeroTarjeta(valor))}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                        />

                        <div className="row">
                            <div className="col-6">
                                <CampoFormulario
                                    etiqueta="Vencimiento"
                                    tipo="text"
                                    nombre="vencimiento"
                                    valor={vencimiento}
                                    alCambiar={(valor) => setVencimiento(formatearVencimiento(valor))}
                                    placeholder="MM/AA"
                                    maxLength={5}
                                />
                            </div>
                            <div className="col-6">
                                <CampoFormulario
                                    etiqueta="CVV"
                                    tipo="password"
                                    nombre="cvv"
                                    valor={cvv}
                                    alCambiar={(valor) => setCvv(valor.replace(/\D/g, ""))}
                                    placeholder="123"
                                    maxLength={3}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary" disabled={estado === "procesando"}>
                            {estado === "procesando" ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    PROCESANDO PAGO...
                                </>
                            ) : (
                                `PAGAR ${formatearPrecio(total)}`
                            )}
                        </button>
                    </form>

                    <p className="pago-aviso">
                        <i className="bi bi-shield-lock"></i> Pago simulado: no ingreses datos reales.
                        No se guarda ni se envía nada.
                    </p>
                </div>

                <aside className="resumen-compra">
                    <h2>Tu pedido</h2>

                    {items.map((item) => (
                        <div className="pago-item" key={item.codigo}>
                            <span>{item.nombre} × {item.cantidad}</span>
                            <span>{formatearPrecio(item.precio * item.cantidad)}</span>
                        </div>
                    ))}

                    <hr />

                    <div className="resumen-linea resumen-total">
                        <span>Total</span>
                        <span>{formatearPrecio(total)}</span>
                    </div>

                    <Link to="/carrito" className="volver-catalogo">← Volver al carrito</Link>
                </aside>

            </div>
        </>
    )
}

export default Pago;