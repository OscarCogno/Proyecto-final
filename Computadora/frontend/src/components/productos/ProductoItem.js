import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const ProductoItem = (props) => {
    const { imagen, producto, precio, descuento, body } = props;

    return (
        <div className='caja' >
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <div className='caja'>{producto}</div>
            <div className='caja'>{precio}</div>
            <div className='caja'>{descuento}</div><br></br>
            <button type="submit" className="boton" > Agregar al carrito <FontAwesomeIcon icon= {faCartShopping} /></button>
            <hr />
        </div>
    );
}

export default ProductoItem;