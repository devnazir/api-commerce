const express = require('express')
const app = express()
const private = require('./middleware/private')
const cors = require('cors')
const PORT = 3000

const products = require('./routes/products')

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use(private)
app.use('/', products)
app.use('/products', products)

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running at ${process.env.PORT || PORT}`)
})