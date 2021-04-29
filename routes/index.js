const express = require('express')
const router = express.Router()
const client = require('../db/index')

router.get('/products', (req, res) => {
  if (res.statusCode === 200) {
    client.connect((err) => {
      client.db('commerce').collection('products').find().toArray((err, products) => {
        return res.json(products)
      })
    })
  }
})

router.post('/products', (req, res) => {
  if (res.statusCode === 200) {
    client.connect((err) => {
      client.db('commerce').collection('products').insertOne(req.body, (err, result) => {
        if(err) console.log(err)
        console.log('Added new product success')
      })
    })

    client.close()
  }
})


router.get('/users', (req, res) => {
  if(res.statusCode === 200) {
    client.connect((err) => {
      client.db('commerce').collection('users').find().toArray((err, users) => {
        return res.json(users)
      })
    })
  }
})

module.exports = router