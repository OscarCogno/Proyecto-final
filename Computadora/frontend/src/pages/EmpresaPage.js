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
                    Contamos con un excelente grupo humano el cual se capacita en forma permanente a fin de estar actualizado en los cambios e innovaciones tecnológicas que se presentan. Nuestro objetivo principal es lograr una permanente mejora en nuestras actividades a fin de dar un servicio que asegure un asesoramiento, soporte técnico y su posterior servicio post-venta. con responsabilidad y compromiso para llegar adquirir la solución a sus necesidades.
                </p>
                <p> En la actualidad contamos con unas instalaciones que abarcan una superficie de unos 250 m2 dotados de una amplia exposición, zona de servicio técnico, despachos y una sala acondicionada tanto para la formación como para la realización de presentaciones.</p>
                <p>Ponemos a su disposición nuestra nueva web, donde además de poder comprar <b>online</b>, podrá encontrar la últimas noticias del sector, nuestros proyectos más recientes y todo lo relacionado a nuestra actividad, siendo ésta un canal más de información con el cliente.</p>
                <p>Nos dedicamos a comercializar e integrar tecnología con el fin de brindar soluciones a diversas industrias y organizaciones privadas y públicas en diferentes puntos de Argentina.</p>
            </div>
        </main>

    );
}

export default EmpresaPage;