const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.USERNAMEDB}:${process.env.PASSWORD}@cluster0.i29lx.mongodb.net/commerce?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const QUERY = (query) => {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) reject("Err")
      resolve(query(client))
    })
  })
}

module.exports = QUERY