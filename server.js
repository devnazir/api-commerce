const express = require('express')
const app = express()
const private = require('./middleware/private')
const cors = require('cors')
const route = require('./routes/index')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(private)
app.use('/', route)
app.use('/products', route)
app.use('/users', route)

app.listen(3000)





