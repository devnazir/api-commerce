const express = require('express')
const router = express.Router()
const { getProducts, postProduct, getProductById, updateProduct, deleteProduct } = require('../controller/products')

router
  .get('/products', getProducts)
  .get('/products/:id', getProductById)
  .post('/products', postProduct)
  .patch('/products/:id', updateProduct)
  .delete('/products/:id', deleteProduct)

router.use((req, res) => {
  res.status(200).json({
    status: true
  })
})

module.exports = router