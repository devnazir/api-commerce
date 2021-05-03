### Install Dependencies
```
$ npm install
```

### Usage
```
$ npm run server
```
you will be see `your apikey : apikey` in your terminal. so, save the apikey in file `.env` (see .env.example)
```
DB: your name database
USERNAMEDB: your username mongodb
PASSWORD: your password mongodb
APIKEY: your apikey
```

if you have not an account cloudmongodb, register at https://cloud.mongodb.com/

### Example Result API Product
http://localhost:3000/products?apikey=xxx
```
[
  {
    _id: "608f8b802b700f10c8e4d525",
    name: "Laptop",
    price: "1000000",
    category: "Electronic",
    product_id: "1620020086594",
    imageID: "608f8b732b700f10c8e4d522",
    src: {
      img: "data:image/jpeg;base64, xxxxxx"
    },
  }
]
```