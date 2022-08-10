var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');


/* GET home page. */
router.get('/', async function(req, res, next) {

  var productos = await productosModel.getProductos();

  res.render('admin/productos',{
    layout:'admin/layout',
     persona: req.session.nombre,
     productos
  } );
});

router.get('/agregar', (req, res, next) => {
   res.render('admin/agregar',{
     layout: 'admin/layout'
   })
});

router.post('/agregar', async (req, res, next) => {
   try {
        if (req.body.titulo != "" && req.body.descripcion != "" && req.body.precio != "") {
          await productosModel.insertProducto(req.body);
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

    var obj = {
                imagen: req.body.imagen,
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