const GridFsStorage = require('multer-gridfs-storage')
const { uri } = require('./database')

let storage = new GridFsStorage({
  url: uri,
  options: { useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: file.originalname,
        bucketName: "products",
      }
      resolve(fileInfo)
    })
  }
})

module.exports = storage