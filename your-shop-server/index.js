const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const port = 4000
const cors = require('cors')
require('dotenv').config()
const ObjectID = require('mongodb').ObjectID

const app = express()
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qkzne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const product = client.db(process.env.DB_NAME).collection("products");
    const orderCollection = client.db(process.env.DB_NAME).collection("orderDetails");

    app.get('/products', (req, res) => {
        product.find({})
            .toArray((err, items) => {
                res.send(items)
            })
    })

    app.post('/addProduct', (req, res) => {
        const newProduct = req.body;
        console.log(newProduct);
        product.insertOne(newProduct)
            .then(result => {
                console.log('insertedCount', result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })
    app.delete('/deleteProduct/:id', (req, res) => {
        product.deleteOne({ _id: ObjectID(req.params.id) })
            .then(result => {
                res.send(result.deletedCount > 0)
            }) 
    })
    app.get('/product/:id', (req, res) => {
        product.find({ _id: ObjectID(req.params.id) })
           .toArray((err, product) => {
               res.send(product)
           })
          
    }) 
    app.post('/orderDetails', (req, res) => {
        const newOrder = req.body;
        console.log(newOrder);
        orderCollection.insertOne(newOrder)
            .then(result => {
                console.log('insertedCount', result.insertedCount);
                res.send(result.insertedCount > 0)
            })
    })
    app.get('/orderDetailsInfo/:email', (req, res) => {
        orderCollection.find({"email":req.params.email} )
           .toArray((err, product) => {
               res.send(product)
           })
          
    }) 

  
});











app.get('/', (req, res) => {
    res.send('Hello World! Ok!!')
})

app.listen( process.env.PORT || port)