const QUERY = require('../config/database')
const randomNumber = require('../helpers/randomNumber')

function Products() {
  this.getProductsData = ({ res }) => {
    QUERY(client => {
      client.db('commerce').collection('products').find().toArray((err, product) => {
        res.json(product)
      })
    })
  }

  this.postProductData = (req, res) => {
    const document = {
      name: req.body.name,
      product_id: randomNumber()
    }

    QUERY(client => {
      client.db('commerce').collection('products').insertOne(document, (err, result) => {
        res.json(result.ops)
      })
    })
  }

  this.getProductDataByIdData = (req, res) => {
    const id = req.params.id
    QUERY(client => {
      client.db('commerce').collection('products').find({ product_id: id, }).toArray((err, result) => {
        res.json(result)
      })
    })
  }

  this.updateProductData = (req, res) => {
    const id = req.params.id
    const newValue = {
      $set: req.body
    }

    QUERY(client => {
      client.db('commerce').collection('products').updateOne({ product_id: id }, newValue, (err, result) => {
        res.json({
          updated: true
        })
      })
    })
  }

  this.deleteProductData = (req, res) => {
    const id = req.params.id
    QUERY(client => {
      client.db('commerce').collection('products').deleteOne({ product_id: id }, (err, result) => {
        res.json({
          deleted: true
        })
      })
    })
  }
}

module.exports = new Products()