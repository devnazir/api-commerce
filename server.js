const express = require('express')
const app = express()
const apikey = require('./middleware/apikey')
const cors = require('cors')
const PORT = 3000
const key = require('crypto').randomBytes(64).toString('base64')
console.log("your apikey :", key)

const products = require('./routes/products')

app.use(apikey)
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/', products)
app.use('/products', products)

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running at ${process.env.PORT || PORT}`)
})