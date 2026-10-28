import { useState } from "react";
import { Link } from "react-router-dom";
import TablaProductos from "../../components/organismos/TablaProductos";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { useProductos } from "../../store/productos";

function ProductosAdmin(){
    const { productos, eliminar } = useProductos();
    const [busqueda, setBusqueda] = useState("");

    const texto = busqueda.toLowerCase();
    const filtrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(texto) ||
        p.marca.toLowerCase().includes(texto) ||
        p.codigo.toLowerCase().includes(texto)
    );

    const pedirEliminar = (codigo: string) => {
        if (!confirm("¿Seguro que quieres eliminar este producto?")) return;
        eliminar(codigo);
    };

    return(
        <PaginaAdmin titulo="Mantenedor de Productos">
            <div className="admin-panel-box">

                <div className="admin-actionbar">
                    <div className="admin-search">
                        <i className="bi bi-search"></i>
                        <input
                            type="text"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            placeholder="Buscar por nombre, marca o código..."
                        />
                    </div>

                    <Link to="/admin/productos/nuevo" className="btn-admin btn-admin-primario">
                        <i className="bi bi-plus-lg"></i> Nuevo producto
                    </Link>
                </div>

                <TablaProductos productos={filtrados} alEliminar={pedirEliminar} />
            </div>
        </PaginaAdmin>
    )
}

export default ProductosAdmin;
