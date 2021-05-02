const express = require('express')
const router = express.Router()
const { getProducts, postProduct, getProductById, updateProduct, deleteProduct, getImageProduct } = require('../controller/products')
const storage = require('../config/imageSchema')
const multer = require('multer')
const upload = multer({ storage })

router
  .get('/products', getProducts)
  .get('/products/:id', getProductById)
  .get('/products/image/:id', getImageProduct)
  .post('/products', upload.single('upload'), postProduct)
  .patch('/products/:id', updateProduct)
  .delete('/products/:id', deleteProduct)

module.exports = router