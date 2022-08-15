import React from "react";
import '../styles/components/pages/estilos.css';
import '../styles/components/pages/normalize.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';

const ProductosPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/productos');
      setProductos(response.data);
      setLoading(false);
    };

    cargarProductos();
  }, []);

  return (
    <section className="container">
      <h2 className="titulo">Productos</h2>
      {
        loading ? (
          <p>Cargando...</p>
        ) : (
          productos.map(item => <ProductoItem key={item.id}
            imagen={item.imagen} producto={item.producto}
            precio={item.precio} descuento={item.descuento} />)
        )
           }

    </section>
  
  )};



export default ProductosPage;