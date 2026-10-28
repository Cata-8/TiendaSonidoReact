import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/Tema.css';
import './css/Admin.css';
import './css/Carrito.css';
import './css/Catalogo.css';
import './css/Contacto.css';
import './css/Detalle.css';
import './css/Inicio.css';
import './css/Login.css';
import './css/Navbar.css';
import './css/QuienesSomos.css';
import './css/Registro.css';
import './css/Ubicacion.css';
import './css/Usuario.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
