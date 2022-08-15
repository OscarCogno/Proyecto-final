var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function (req, res, next) {

  var productos = await productosModel.getProductos();

  productos = productos.map(producto => {
    if(producto.imagen) {
        const imagen = cloudinary.image(producto.imagen, {
           width: 70,
           height: 70,
           crop: 'fill'
        });
         return {
               ...producto,
               imagen
         }
    } else {
       return {
          ...producto,
              imagen: ''
       }
    }
  });

  res.render('admin/productos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    productos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {

    var imagen = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      imagen = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
      await productosModel.insertProducto({
          ...req.body,
        imagen
      });
      res.redirect('/admin/productos')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el producto'
    })
  }
})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

    let producto = await productosModel.getProductoById(id);
    if (producto.imagen) {
        await (destroy(producto.imagen));
    }

  await productosModel.deleteProductosById(id);
  res.redirect('/admin/productos');
});


router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var producto = await productosModel.getProductoById(id);


  res.render('admin/editar', {
    layout: 'admin/layout',
    producto
  })

});

router.post('/editar', async (req, res, next) => {
  try {

      
    let imagen = req.body.imagen_original;
    let borrar_imagen_vieja = false;
    if (req.body.imagen_delete == "1") {
        imagen = null;
        borrar_imagen_vieja = true;
    } else {
         if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            imagen = (await uploader(imagen.tempFilePath)).public_id;
            borrar_imagen_vieja = true;
         }
    }
    if (borrar_imagen_vieja && req.body.imagen_original) {
        await (destroy(req.body.imagen_original));
    }


    var obj = {
      imagen,
      producto: req.body.producto,
      precio: req.body.precio,
      descuento: req.body.descuento
    }
    console.log(obj)

    await productosModel.editarProductoById(obj, req.body.id);
    res.redirect('/admin/productos');

  } catch (error) {
    console.log(error)
    res.render('admin/editar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el producto'
    })
  }
})


module.exports = router;