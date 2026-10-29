import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CampoAdmin from "../molecules/CampoAdmin";
import { categoriasProducto } from "../../data/categorias";
import { useProductos } from "../../store/Productos";
import type { Producto } from "../../types/Producto";

interface FormularioProductoProps{
    producto?: Producto; // si viene, se está editando
}

function FormularioProducto({ producto }: FormularioProductoProps) {
    const editando = producto !== undefined;
    const { crear, actualizar } = useProductos();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        codigo: producto?.codigo ?? "",
        categoria: producto?.categoria ?? "",
        nombre: producto?.nombre ?? "",
        marca: producto?.marca ?? "",
        modelo: producto?.modelo ?? "",
        precio: String(producto?.precio ?? ""),
        stock: String(producto?.stock ?? ""),
        imagen: producto?.imagen ?? "",
        descripcion: producto?.descripcion ?? "",
    });

    const cambiar = (campo: keyof typeof form) => (valor: string) =>
        setForm((anterior) => ({ ...anterior, [campo]: valor }));

    const guardar = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const datos: Producto = {
            codigo: form.codigo.trim(),
            categoria: form.categoria,
            nombre: form.nombre.trim(),
            marca: form.marca.trim(),
            modelo: form.modelo.trim(),
            stock: parseInt(form.stock, 10),
            precio: parseInt(form.precio, 10),
            descripcion: form.descripcion.trim(),
            imagen: form.imagen.trim(),
        };

        if (!datos.codigo || !datos.categoria || !datos.nombre || !datos.marca ||
            !datos.modelo || !datos.descripcion || !datos.imagen) {
            alert("Debe completar todos los campos");
            return;
        }
        if (Number.isNaN(datos.precio) || datos.precio < 0 || Number.isNaN(datos.stock) || datos.stock < 0) {
            alert("El precio y el stock deben ser números iguales o mayores a 0");
            return;
        }

        if (editando) {
            actualizar(datos);
        } else if (!crear(datos)) {
            alert("Ya existe un producto con ese código. Usa uno distinto.");
            return;
        }

        alert(editando ? "Producto actualizado correctamente" : "Producto creado correctamente");
        navigate("/admin/productos");
    };

    return(
        <form onSubmit={guardar}>
            <div className="admin-form-grid">
                <CampoAdmin etiqueta="Código" nombre="codigo" valor={form.codigo} alCambiar={cambiar("codigo")}
                    placeholder="Ej: GA006" requerido deshabilitado={editando} />
                <CampoAdmin etiqueta="Categoría" nombre="categoria" tipo="select" valor={form.categoria}
                    alCambiar={cambiar("categoria")} placeholderSelect="Seleccione categoría" requerido
                    opciones={categoriasProducto.map((c) => ({ valor: c, etiqueta: c }))} />
                <CampoAdmin etiqueta="Nombre del producto" nombre="nombre" valor={form.nombre}
                    alCambiar={cambiar("nombre")} placeholder="Ej: Guitarra Acústica Folk" requerido completo />
                <CampoAdmin etiqueta="Marca" nombre="marca" valor={form.marca} alCambiar={cambiar("marca")} requerido />
                <CampoAdmin etiqueta="Modelo" nombre="modelo" valor={form.modelo} alCambiar={cambiar("modelo")} requerido />
                <CampoAdmin etiqueta="Precio (CLP)" nombre="precio" tipo="number" min={0} valor={form.precio}
                    alCambiar={cambiar("precio")} requerido />
                <CampoAdmin etiqueta="Stock" nombre="stock" tipo="number" min={0} valor={form.stock}
                    alCambiar={cambiar("stock")} requerido />
                <CampoAdmin etiqueta="Ruta de imagen" nombre="imagen" valor={form.imagen}
                    alCambiar={cambiar("imagen")} placeholder="/img/nombre_archivo.jpg" requerido completo />
                <CampoAdmin etiqueta="Descripción" nombre="descripcion" tipo="textarea" valor={form.descripcion}
                    alCambiar={cambiar("descripcion")} requerido completo />
            </div>

            <div className="admin-form-actions">
                <button type="submit" className="btn-admin btn-admin-primario">
                    <i className="bi bi-check-lg"></i> Guardar producto
                </button>
                <Link to="/admin/productos" className="btn-admin btn-admin-secundario">Cancelar</Link>
            </div>
        </form>
    );
}

export default FormularioProducto;
