const express = require('express')
const app = express()
const private = require('./middleware/private')
const cors = require('cors')
const route = require('./routes/index')
const PORT = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(private)
app.use('/', route)
app.use('/products', route)
app.use('/users', route)

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running at ${process.env.PORT || PORT}`)
})





