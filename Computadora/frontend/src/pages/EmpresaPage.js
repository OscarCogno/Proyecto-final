import React from 'react';
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';

const EmpresaPage = (props) => {
    return (
        <main>
            <div className="centrar">

                <h1>Empresa</h1>
                <p><b>Tú Primer computadora</b> es una tienda con más 10 años dentro del rubro tecnológico en Argentina. Nos
                    dedicamos a la venta de computadoras, notebooks, hardware y productos periféricos para consumidores
                    particulares, empresas o revendedores.
                    Aqui encontrarás todo lo que compone la PC de tus sueños. Conocemos nuestros productos
                    y por ello te asesoramos para que hagas una compra personalizada a la altura de tus necesidades.
                </p>
                <p>
                    Contamos con un excelente grupo humano el cual se capacita en forma permanente a fin de estar actualizado en los cambios e innovaciones tecnológicas que se presentan Nuestro objetivo principal es lograr una permanente mejora en nuestras actividades a fin de dar un servicio que asegure un asesoramiento, soporte técnico y su posterior servicio post-venta. con responsabilidad y compromiso para llegar adquirir la solución a sus necesidades.
                </p>

            </div>
        </main>

    );
}

export default EmpresaPage;