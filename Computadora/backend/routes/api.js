var express = require('express');
var router = express.Router();
var productosModel = require('./../models/productosModel');
const cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


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


router.post('/contacto', async (req, res) => {
   const mail = {
      to: 'cognooscaralberto25@gmail.com',
      subject: 'Contacto web',
      html: `${req.body.nombre} se contacto a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su celular es: ${req.body.celular}`
   }

   const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
      }
   });

   await transport.sendMail(mail)

   res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
   });
   
});

module.exports = router;