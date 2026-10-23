import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio';
import Contacto from './paginas/Contacto';
import Login from './paginas/Login';
import QuienesSomos from './paginas/QuienesSomos';
import Productos from './paginas/Productos';
import Navbar from './components/organismos/Navbar';
import DetalleProducto from './paginas/DetalleProducto';
import Ubicacion from './paginas/Ubicacion';

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path= "/"
          element={<Inicio/>}
        />

        <Route
          path='/productos'
          element={<Productos/>}
        />
        <Route
          path='/contacto'
          element={<Contacto/>}
        />
        <Route
          path='/quienesSomos'
          element={<QuienesSomos/>}
        />
        <Route
          path="/ubicacion"
          element={<Ubicacion />}
        />
        <Route 
          path='/producto/:id'
          element={<DetalleProducto/>}/>
        <Route 
          path='/login'
          element={<Login/>}/>
      </Routes>
      
    </>
  );
}

export default App
