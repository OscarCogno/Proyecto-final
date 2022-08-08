import React from "react";
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';

const ServicioPage = (props) => {
    return (
        <main>
            <div className="container">
            <div className="caja caja1"> <img src="img/reparacion.jpg" width="300" alt="reparar"/></div>
        </div>
            <div className="centrar">
                <h1>Servicio Tecnico</h1>

                <p>Somos una empresa que se dedica a reparación y servicio técnico de pc. Contamos con una
                    amplia experiencia brindando nuestros servicios a empresas, como así también a pequeños comercios y
                    particulares.</p>
                <h2>Servicios para PC´S y Notebooks:</h2>
                <ul>
                    <li>Instalación y configuración de componentes y periféricos.</li>
                    <li> Eliminación de virus, troyanos, Spyware.</li>
                    <li>Limpieza y mantenimiento de sistemas.</li>
                    <li>Diagnóstico y detección de fallas.</li>
                    <li>Asesoramiento técnico.</li>
                    <li>Recuperación de los datos en disco rígido y otros medios de almacenamiento.</li>
                    <li>Reparación de monitores e impresoras</li>
                </ul>
            </div>
        </main>
    );
}

export default ServicioPage;