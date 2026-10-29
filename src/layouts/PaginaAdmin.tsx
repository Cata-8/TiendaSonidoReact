import type { ReactNode } from "react";
import { useSesion } from "../store/Sesion";

interface PaginaAdminProps{
    titulo: string;
    children: ReactNode;
}

// Barra superior + área de contenido que repetían todas las páginas admin_*.html
function PaginaAdmin({ titulo, children }: PaginaAdminProps) {
    const { usuario } = useSesion();
    const nombre = usuario?.nombre ?? "Admin";

    return (
        <>
            <div className="admin-topbar">
                <h1>{titulo}</h1>
                <div className="admin-topbar-user">
                    <span>{nombre}</span>
                    <div className="avatar">{nombre.charAt(0).toUpperCase()}</div>
                </div>
            </div>

            <div className="admin-content">
                {children}
            </div>
        </>
    );
}

export default PaginaAdmin;
