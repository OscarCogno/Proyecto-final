import React from 'react';
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faPhone} from '@fortawesome/free-solid-svg-icons'

const ContactoPage = (props) => {
    return (
      <main>
      <form className="formulario" name="form_main">
    
      
      <label className="correr" htmlFor="Información del cliente"><b>Información del cliente:</b></label>
      <fieldset>
        <p>
          <label htmlFor="Nombre">Nombre:</label>
          <input type="text" required name="nombre" placeholder="Tu nombre"/>
          
        </p>
        <p>
          <label htmlFor="Apellido">Apellido:</label>
          <input type="text" required name="apellido" placeholder="Tu apellido"/>
          
        </p>
        <p>
          <label htmlFor="Email"><FontAwesomeIcon icon= {faEnvelope} /> Email:</label>
          <input type="text" required name="email" placeholder="Email"/>
          
        </p>
      </fieldset>
      <label className="correr" htmlFor="Ingrese su mensaje"><b>Ingrese su mensaje:</b></label>
      
      <fieldset>
        <label htmlFor="text">Mensaje:</label><br></br>
        <textarea name="text" id="text" cols="30" rows="10" oninput="contadorTexto()"></textarea><br></br>
        <label htmlFor="caracteres">Caracteres contados:</label><span id="caracteres"></span><br></br>
        <label htmlFor="palabras">Palabras:</label><span id="palabras"></span><br></br>
        <label htmlFor="lineas">Lineas:</label><span id="lineas"></span><br></br>
        <input type="submit" value="Enviar"/>

      </fieldset>
    
      <label className="correr" htmlFor="Informacion de contacto"><b>Información de contacto: </b></label>
      <fieldset>
        <p>
          <label htmlFor="Email:"> <FontAwesomeIcon icon= {faEnvelope} /><b> Email:</b> tuproximacompu@gmail.com</label>
        </p>
        <p>
          <label htmlFor="Celular"> <FontAwesomeIcon icon= {faMobile} /><b><i> Celular: </i></b>3435123456</label>
        </p>
        <p>
          <label htmlFor="Teléfono Fijo"> <FontAwesomeIcon icon= {faPhone} /><b><i> Teléfono
                fijo: </i></b>4363431</label>
        </p>
        <p>
          <label htmlFor="Información de ubicación"><b>Información de ubicación:</b></label>
        </p>
        <p>
          <label htmlFor="Ubicación"><b><i>Ubicación: </i></b>Entre Ríos 3434</label>
        </p>
      </fieldset>
  </form>

  </main>
                                             
    );
  }
export default ContactoPage;