var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
const cloudinary = require('cloudinary').v2;


router.get('/productos', async function (req, res, next) {

  let productos = await productosModel.getProductos();

  productos = productos.map(productos => {
    if(productos.imagen) {
        const imagen = cloudinary.url(productos.imagen, {
           width: 1000,
           height: 1000,
           crop: 'fill'
        });
         return {
               ...productos,
               imagen
         }
    } else {
       return {
          ...productos,
              imagen: ''
       }
    }
  });
      res.json(productos);
});

module.exports = router;