interface TarjetaEstadisticaProps{
    icono: string;                                      // nombre de bootstrap-icons, ej: "box-seam-fill"
    color: "morado" | "amarillo" | "rosa" | "verde";    // clase icon-<color> de admin.css
    valor: number;
    etiqueta: string;
}

function TarjetaEstadistica({ icono, color, valor, etiqueta }: TarjetaEstadisticaProps) {
    return(
        <div className="admin-stat-card">
            <div className={`admin-stat-icon icon-${color}`}>
                <i className={`bi bi-${icono}`}></i>
            </div>
            <div className="admin-stat-info">
                <div className="valor">{valor}</div>
                <div className="etiqueta">{etiqueta}</div>
            </div>
        </div>
    )
}

export default TarjetaEstadistica;
