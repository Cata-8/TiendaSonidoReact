import FormularioContacto from "../components/organismos/FormularioContacto";


function Contacto(){

    return(
        <div className= "container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="shadow-sm p-4 rounded-3" style={{ backgroundColor: "#2A1B38", color: "#F5EFFA" }}>

                        <h2 className="mb-4">Formulario de contacto</h2>

                        <FormularioContacto/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;