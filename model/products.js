const { QUERY } = require('../config/database')
const randomNumber = require('../helpers/randomNumber')
const { ObjectId } = require('mongodb');
const axios = require('axios')

function Products() {
  this.getProductsData = ({ res }) => {
    QUERY(client => {
      client.db('commerce').collection('products').find().toArray((err, product) => {
        res.json(product)
      })
    })
  }

  this.getThisImage = async (req, id) => {
    try {
      const url = `${req.protocol}://${req.headers.host}${req.route.path}/image/${id}?apikey=${req.query.apikey}`
      const fetchImage = await axios(url)
      return fetchImage.data
    } catch(err) {
      console.log(err)
    }
  }

  this.postProductData = async (req, res) => {
    const fileID = req.file.id

    const document = {
      name: req.body.name,
      product_id: randomNumber(),
      imageID: fileID,
      src: await this.getThisImage(req, fileID)
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

  this.getImageProductData = (req, res) => {
    const id = req.params.id
    QUERY(client => {
      client.db('commerce').collection('products.chunks').find({ files_id: ObjectId(id) }).toArray((err, result) => {
        res.json({
          img: `data:image/jpeg;base64, ${result[0].data.buffer.toString('base64')}`
        })
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