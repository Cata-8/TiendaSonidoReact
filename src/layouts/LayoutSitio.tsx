import { Outlet } from "react-router-dom";
import Navbar from "../components/organismos/Navbar";
import Footer from "../components/organismos/Footer";

// Marco de las páginas públicas: navbar + contenido + footer.
// .sitio activa el tema oscuro de tema.css
function LayoutSitio() {
    return (
        <div className="sitio" data-bs-theme="dark">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default LayoutSitio;
