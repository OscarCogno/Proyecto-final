import React from 'react';
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile, faPhone} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
      nombre: '',
      email: '',
      celular: '',
      mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
       const { name, value } = e.target;
       setFormData(oldData => ({
           ...oldData,
           [name]: value
       }));
    }

    const handleSubmit = async e => {
       e.preventDefault();
       setMsg('');
       setSending(true);
       const response = await axios.post('http://localhost:3000/api/contacto', formData);
       setSending(false);
       setMsg(response.data.message);
       if (response.data.error === false) {
          setFormData(initialForm)
       }
    }

    return (
      <main>
      <form action='/contacto' method='post' onSubmit={handleSubmit} className="formulario" >
    
      
      <label className="correr" for="Información del cliente"><b>Información del cliente:</b></label>
      <fieldset>
        <p>
          <label for="Nombre">Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}  placeholder="Tu nombre" required/>
          
        </p>
        
        <p>
          <label for="Email"><FontAwesomeIcon icon= {faEnvelope} /> Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange}  placeholder="Email" required/>
          
        </p>
        <p>
        <label for="Celular"><FontAwesomeIcon icon= {faMobile} /> Celular:</label>
          <input type="text"  name="celular" value={formData.celular} onChange={handleChange}  placeholder="Celular" required/>
          
        </p>
      </fieldset>
      <label className="correr" for="Ingrese su mensaje"><b>Ingrese su mensaje:</b></label>
      
      <fieldset>
        <label for="Mensaje">Mensaje:</label><br></br>
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea><br></br>
        <input type="submit" value="Enviar"/>

         {sending ? <p>Enviando...</p> : null}
         {msg ? <p>{msg}</p> : null}

      </fieldset>
    
      <label className="correr" for="Informacion de contacto"><b>Información de contacto: </b></label>
      <fieldset>
        <p>
          <label for="Email:"> <FontAwesomeIcon icon= {faEnvelope} /><b> Email:</b> tuproximacompu@gmail.com</label>
        </p>
        <p>
          <label for="Celular"> <FontAwesomeIcon icon= {faMobile} /><b><i> Celular: </i></b>3435123456</label>
        </p>
        <p>
          <label for="Teléfono Fijo"> <FontAwesomeIcon icon= {faPhone} /><b><i> Teléfono
                fijo: </i></b>4363431</label>
        </p>
        <p>
          <label for="Información de ubicación"><b>Información de ubicación:</b></label>
        </p>
        <p>
          <label for="Ubicación"><b><i>Ubicación: </i></b>Entre Ríos 3434</label>
        </p>
      </fieldset>
  </form>

  </main>
                                             
    );
  }
export default ContactoPage;