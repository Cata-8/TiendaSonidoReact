import { Link } from "react-router-dom";
import TarjetaEstadistica from "../../components/molecules/TarjetaEstadistica";
import PaginaAdmin from "../../layouts/PaginaAdmin";
import { useCarrito } from "../../store/carrito";
import { useProductos } from "../../store/productos";
import { useUsuarios } from "../../store/usuarios";

function Dashboard(){
    const { productos } = useProductos();
    const { usuarios } = useUsuarios();
    const { totalUnidades } = useCarrito();

    const stockBajo = productos.filter((p) => p.stock <= 3).length;

    return(
        <PaginaAdmin titulo="Dashboard">
            <div className="admin-stats">
                <TarjetaEstadistica icono="box-seam-fill" color="morado" valor={productos.length}
                    etiqueta="Productos totales" />
                <TarjetaEstadistica icono="exclamation-triangle-fill" color="amarillo" valor={stockBajo}
                    etiqueta="Con stock bajo (≤3)" />
                <TarjetaEstadistica icono="people-fill" color="rosa" valor={usuarios.length}
                    etiqueta="Usuarios registrados" />
                <TarjetaEstadistica icono="cart-check-fill" color="verde" valor={totalUnidades}
                    etiqueta="Productos en carrito (invitado)" />
            </div>

            <div className="admin-panel-box">
                <h2>Accesos rápidos</h2>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                    <Link to="/admin/productos" className="btn-admin btn-admin-primario">
                        <i className="bi bi-plus-lg"></i> Gestionar productos
                    </Link>
                    <Link to="/admin/usuarios" className="btn-admin btn-admin-secundario">
                        <i className="bi bi-person-plus"></i> Gestionar usuarios
                    </Link>
                </div>
            </div>
        </PaginaAdmin>
    )
}

export default Dashboard;
