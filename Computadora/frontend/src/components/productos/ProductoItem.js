import React from 'react';

const ProductoItem = (props) => {
    const { imagen, producto, precio, descuento, body } = props;

    return (
        <div className='caja' >
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <h1>{producto}</h1>
            <h2>{precio}</h2>
            <h3>{descuento}</h3>
            <hr />
        </div>
    );
}

export default ProductoItem;