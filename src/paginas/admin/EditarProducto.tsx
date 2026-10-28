import { Link, useParams } from "react-router-dom";
import FormularioProducto from "../../components/organismos/FormularioProducto";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { useProductos } from "../../store/productos";

// Sirve para crear (/admin/productos/nuevo) y para editar (/admin/productos/:codigo/editar)
function EditarProducto(){
    const { codigo } = useParams();
    const { buscar } = useProductos();

    const producto = codigo ? buscar(codigo) : undefined;

    if (codigo && !producto) {
        return(
            <PaginaAdmin titulo="Producto no encontrado">
                <div className="admin-panel-box">
                    <p>No existe un producto con el código {codigo}.</p>
                    <Link to="/admin/productos" className="btn-admin btn-admin-secundario">Volver</Link>
                </div>
            </PaginaAdmin>
        )
    }

    return(
        <PaginaAdmin titulo={producto ? "Editar Producto" : "Nuevo Producto"}>
            <div className="admin-panel-box">
                <FormularioProducto key={codigo ?? "nuevo"} producto={producto} />
            </div>
        </PaginaAdmin>
    )
}

export default EditarProducto;
