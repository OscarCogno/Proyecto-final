import React from "react";
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';

const OfertasPage = (props) => {
  return (
    <main>
      <div className="titulo"><b>Ofertas de la semana</b></div>
      <div className="container">
        <div className="caja "><img src="img/tablet (2).jpg" width="150" alt="Tablet" /><p>Tablet</p><p>Precio: $12000 </p><p>ahora: $10800</p></div>
        <div className="caja "><img src="img/galeria2.jpg" width="150" alt="Notebook" /><p>Notebook</p><p>Precio: $80000</p><p>ahora: $68000</p></div>
        <div className="caja "><img src="img/mesa.jpg" width="150" alt="Mobiliario" /><p>Mobiliario</p><p>Precio: $20000</p><p>ahora: $18000</p></div>
      </div>

      <div className="titulo"><b>Computadoras</b></div>
      <div className="container">
        <div className="caja "><img src="img/compu.jpg" width="150" alt="compu" /><p>Computadora</p><p>Precio: $12000</p></div>
        <div className="caja "><img src="img/notebook.jpg" width="150" alt="Notebook" /><p>Notebook</p><p>Precio: $80000</p></div>
        <div className="caja "><img src="img/notebook2.jpg" width="150" alt="Notebook" /><p>Notebook</p><p>Precio: $20000</p></div>
      </div>

      <div className="titulo"><b>Accesorios</b></div>
      <div className="container">
        <div className="caja "><img src="img/accesorios.jpg" width="150" alt="Accesorios" /><p>Mousse y Teclados</p><p>Precio: $2000</p></div>
        <div className="caja "><img src="img/base.jpg" width="150" alt="Base" /><p>Base</p><p>Precio: $1800</p></div>
        <div className="caja "><img src="img/funda.jpg" width="150" alt="funda" /><p>Funda</p><p>Precio: $2500</p></div>
      </div>


    </main>
  );
}

export default OfertasPage;