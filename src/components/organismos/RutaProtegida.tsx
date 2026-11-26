import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSesion } from "../../store/sesion";
import type { Rol } from "../../types/usuario";

interface RutaProtegidaProps{
    roles?: Rol[]; // si no se indica, basta con tener sesión iniciada
}

// Guardia de rutas: envuelve a otras rutas y decide si se puede entrar.
//  - Sin sesión              -> /login (y después del login vuelve a la página que quería)
//  - Con sesión, rol no apto -> /acceso-denegado
//  - En otro caso            -> muestra la ruta hija (<Outlet />)
// Ojo: esto mejora la experiencia, pero la seguridad real la pone el backend con el token JWT.
function RutaProtegida({ roles }: RutaProtegidaProps) {
    const { usuario } = useSesion();
    const ubicacion = useLocation();

    if (!usuario) {
        return <Navigate to="/login" replace state={{ desde: ubicacion.pathname }} />;
    }

    if (roles && !roles.includes(usuario.rol)) {
        return <Navigate to="/acceso-denegado" replace />;
    }

    return <Outlet />;
}

export default RutaProtegida;
