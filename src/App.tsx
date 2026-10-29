import { Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import QuienesSomos from './paginas/QuienesSomos';
import Ubicacion from './paginas/Ubicacion';
import Productos from './paginas/Productos';
import DetalleProducto from './paginas/DetalleProducto';
import Carrito from './paginas/Carrito';
import Usuario from './paginas/Usuario';
import NoEncontrada from './paginas/NoEncontrada';
import LayoutSitio from './layouts/LayoutSitio';
import LayoutAdmin from './layouts/LayoutAdmin';
import Dashboard from './paginas/admin/Dashboard';
import ProductosAdmin from './paginas/admin/ProductosAdmin';
import EditarProducto from './paginas/admin/EditarProducto';
import UsuariosAdmin from './paginas/admin/UsuariosAdmin';
import EditarUsuario from './paginas/admin/EditarUsuario';
import Pago from './paginas/Pago';
import PreguntasFrecuentes from "./paginas/PreguntasFrecuentes";

function App() {

  return (
    <Routes>

      {/* Sitio público: navbar + contenido + footer */}
      <Route element={<LayoutSitio />}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/productos/:categoria" element={<Productos/>} />
        <Route path="/producto/:id" element={<DetalleProducto/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/quienesSomos" element={<QuienesSomos/>} />
        <Route path="/ubicacion" element={<Ubicacion/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="*" element={<NoEncontrada/>} />
        <Route path="/pago" element={<Pago/>} />
        <Route
          path="/preguntas-frecuentes"
          element={<PreguntasFrecuentes />}
        />
      </Route>

      {/* Panel administrador (solo rol admin) */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard/>} />
        <Route path="productos" element={<ProductosAdmin/>} />
        <Route path="productos/nuevo" element={<EditarProducto/>} />
        <Route path="productos/:codigo/editar" element={<EditarProducto/>} />
        <Route path="usuarios" element={<UsuariosAdmin/>} />
        <Route path="usuarios/nuevo" element={<EditarUsuario/>} />
        <Route path="usuarios/:id/editar" element={<EditarUsuario/>} />
      </Route>

    </Routes>
  );
}

export default App
