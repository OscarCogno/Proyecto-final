import React from 'react';
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile} from '@fortawesome/free-solid-svg-icons'

const CuentaPage = (props) => {
    return (
        <main>
     
        <h1><b>Registro de usuario</b></h1>
        
            <fieldset>
                <form className="formulario">
               
                    <p>
                        <legend></legend>
                        <label><FontAwesomeIcon icon= {faEnvelope} /> Email:</label>
                        <input type="Email" autofocus placeholder="Email" required/>
                    </p>
                    <p>
                        <label>Contraseña:</label>
                        <input type="password" placeholder="Su contraseña" required/>
                    </p>
                    <p>
                        <label>Confirmar:</label>
                        <input type="Confirmar password" placeholder="Confirmar contraseña" required/>
                    </p>
                </form>
        </fieldset>
        <h3><b>Información personal</b></h3>
            <form className="formulario">
                <fieldset>
                    <p>
                        <legend></legend>
                        <label>Nombre:</label>
                        <input type="Nombre" placeholder="Nombre" required/>
                    </p>
                    <p>
                        <label>Apellido:</label>
                        <input type="Apellido" placeholder="Apellido" required/>
                    </p>
                    <p>
                        <label>CUIT:</label>
                        <input type="CUIT" placeholder="CUIT" required/>
                    </p>
                    <p>
                        <label><FontAwesomeIcon icon= {faMobile} /> Celular:</label>
                        <input type="Celular" placeholder="Celular" required/>
                    </p>
                   
                    <input type="submit" value="Enviar"/>
                </fieldset>
            </form>
        
        <h2>¿Por Qué Registrarse?</h2>
        <form>
            <fieldset>

                <article>Con tú registro podras comprar en nuestra tienda online</article>

            </fieldset>

        </form>

    </main>
    );
}

export default CuentaPage;