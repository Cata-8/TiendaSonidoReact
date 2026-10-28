import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './styles/tema.css'
import './styles/catalogo.css'
import './styles/detalle.css'
import './styles/login.css'
import './styles/nosotros.css'
import './styles/ubicacion.css'
import './styles/carrito.css'
import './styles/usuario.css'
import './styles/admin.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
