import React from 'react';

const ProductoItem = (props) => {
    const { imagen, producto, precio, descuento, body } = props;

    return (
        <div className='caja' >
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <div className='caja'>{producto}</div>
            <div className='caja'>{precio}</div>
            <div className='caja'>{descuento}</div><br></br>
            <hr />
        </div>
    );
}

export default ProductoItem;