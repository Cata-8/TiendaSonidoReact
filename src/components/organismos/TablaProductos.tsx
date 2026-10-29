import { Link } from "react-router-dom";
import type { Producto } from "../../types/Producto";
import { formatearPrecio } from "../../utils/Formato";

interface TablaProductosProps{
    productos: Producto[];
    alEliminar: (codigo: string) => void;
}

function claseStock(stock: number): string {
    if (stock === 0) return "badge-stock-agotado";
    if (stock <= 3) return "badge-stock-bajo";
    return "badge-stock-ok";
}

function TablaProductos({ productos, alEliminar }: TablaProductosProps) {
    return(
        <div className="admin-table-wrap">
            <table className="admin-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 && (
                        <tr>
                            <td colSpan={8} className="admin-vacio">No se encontraron productos</td>
                        </tr>
                    )}

                    {productos.map((p) => (
                        <tr key={p.codigo}>
                            <td><img src={p.imagen} className="thumb" alt={p.nombre} /></td>
                            <td>{p.codigo}</td>
                            <td>{p.nombre}</td>
                            <td>{p.categoria}</td>
                            <td>{p.marca}</td>
                            <td>{formatearPrecio(p.precio)}</td>
                            <td className={claseStock(p.stock)}>{p.stock}</td>
                            <td>
                                <div className="tabla-acciones">
                                    <Link to={`/producto/${encodeURIComponent(p.codigo)}`} target="_blank" title="Ver detalle">
                                        <i className="bi bi-eye"></i>
                                    </Link>
                                    <Link to={`/admin/productos/${encodeURIComponent(p.codigo)}/editar`} title="Editar">
                                        <i className="bi bi-pencil"></i>
                                    </Link>
                                    <button type="button" className="btn-eliminar" title="Eliminar"
                                        onClick={() => alEliminar(p.codigo)}>
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

export default TablaProductos;
