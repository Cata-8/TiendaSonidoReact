import { useEffect, useState } from "react";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { mensajeDeError } from "../../services/api";
import { contactosApi, type Contacto, type EstadoContacto } from "../../services/contactosApi";

const ESTADOS: EstadoContacto[] = ["PENDIENTE", "LEIDO", "RESUELTO"];

// Mensajes del formulario de contacto. Solo ADMIN: el backend responde 403 a cualquier otro rol.
function MensajesAdmin(){
    const [mensajes, setMensajes] = useState<Contacto[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const cargar = async () => {
        setCargando(true);
        setError("");
        try {
            setMensajes(await contactosApi.listar());      // GET /api/contactos
        } catch (e) {
            setError(mensajeDeError(e));
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        void cargar();
    }, []);

    const cambiarEstado = async (id: number, estado: EstadoContacto) => {
        try {
            const actualizado = await contactosApi.cambiarEstado(id, estado);   // PUT /api/contactos/{id}/estado
            setMensajes((lista) => lista.map((m) => (m.id === id ? actualizado : m)));
        } catch (e) {
            alert(mensajeDeError(e));
        }
    };

    const eliminar = async (id: number) => {
        if (!confirm("¿Seguro que quieres eliminar este mensaje?")) return;
        try {
            await contactosApi.eliminar(id);                                    // DELETE /api/contactos/{id}
            setMensajes((lista) => lista.filter((m) => m.id !== id));
        } catch (e) {
            alert(mensajeDeError(e));
        }
    };

    return(
        <PaginaAdmin titulo="Mensajes de contacto">
            <div className="admin-panel-box">
                {cargando && <p>Cargando mensajes...</p>}
                {error && (
                    <div className="alert alert-danger">
                        {error} <button type="button" className="btn btn-sm btn-outline-danger ms-2" onClick={cargar}>Reintentar</button>
                    </div>
                )}
                {!cargando && !error && mensajes.length === 0 && <p>No hay mensajes todavía.</p>}

                {mensajes.length > 0 && (
                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Mensaje</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensajes.map((m) => (
                                    <tr key={m.id}>
                                        <td>{new Date(m.fechaCreacion).toLocaleString("es-CL")}</td>
                                        <td>{m.nombreCompleto}</td>
                                        <td>{m.correo}</td>
                                        <td>{m.mensaje}</td>
                                        <td>
                                            <select
                                                value={m.estado}
                                                onChange={(e) => cambiarEstado(m.id, e.target.value as EstadoContacto)}
                                            >
                                                {ESTADOS.map((estado) => (
                                                    <option key={estado} value={estado}>{estado}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" className="btn-admin btn-admin-secundario" onClick={() => eliminar(m.id)}>
                                                <i className="bi bi-trash"></i> Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </PaginaAdmin>
    )
}

export default MensajesAdmin;
