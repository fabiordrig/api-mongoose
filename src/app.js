'use strict'

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router();


mongoose.connect('mongodb://fabio:fabinho123@ds041177.mlab.com:41177/node-train')


//carrega rotas
const index = require('./routes/index')
const products = require('./routes/products')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
  extended: false
}))


app.use('/', index)
app.use('/products', products)


module.exports = app