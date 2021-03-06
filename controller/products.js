const {
  getProductsData,
  postProductData,
  getProductDataByIdData,
  updateProductData,
  deleteProductData,
  getImageProductData
} = require('../model/products')

function ControllerProducts() {
  this.getProducts = (req, res) => getProductsData(req, res)
  this.postProduct = (req, res) => postProductData(req, res)
  this.getProductById = (req, res) => getProductDataByIdData(req, res)
  this.getImageProduct = (req, res) => getImageProductData(req, res)
  this.updateProduct = (req, res) => updateProductData(req, res)
  this.deleteProduct = (req, res) => deleteProductData(req, res)
}

module.exports = new ControllerProducts()