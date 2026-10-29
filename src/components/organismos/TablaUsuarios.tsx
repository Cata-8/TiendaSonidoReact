import { Link } from "react-router-dom";
import type { Usuario } from "../../types/Usuario";

interface TablaUsuariosProps{
    usuarios: Usuario[];
    alEliminar: (id: number) => void;
}

function TablaUsuarios({ usuarios, alEliminar }: TablaUsuariosProps) {
    return(
        <div className="admin-table-wrap">
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length === 0 && (
                        <tr>
                            <td colSpan={4} className="admin-vacio">No se encontraron usuarios</td>
                        </tr>
                    )}

                    {usuarios.map((u) => (
                        <tr key={u.id}>
                            <td>{u.nombre}</td>
                            <td>{u.correo}</td>
                            <td>
                                <span className={`badge-rol ${u.rol === "admin" ? "badge-admin" : "badge-cliente"}`}>
                                    {u.rol}
                                </span>
                            </td>
                            <td>
                                <div className="tabla-acciones">
                                    <Link to={`/admin/usuarios/${u.id}/editar`} title="Editar">
                                        <i className="bi bi-pencil"></i>
                                    </Link>
                                    <button type="button" className="btn-eliminar" title="Eliminar"
                                        onClick={() => alEliminar(u.id)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaUsuarios;
