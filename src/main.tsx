import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './css/tema.css'
import './css/catalogo.css'
import './css/detalle.css'
import './css/login.css'
import './css/nosotros.css'
import './css/ubicacion.css'
import './css/carrito.css'
import './css/usuario.css'
import './css/admin.css'
import './css/pago.css'
import './css/preguntasFrecuentes.css'
import './css/QuienesSomos.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
