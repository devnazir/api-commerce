const dotenv = require('dotenv')
dotenv.config()

module.exports = function (req, res, next) {
  if (req.query.apikey === process.env.APIKEY) {
    res.status(200)
  } else {
    res.status(403).json({
      status: "Acces Forbiden"
    })
  }
  next()
}

