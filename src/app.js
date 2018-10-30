'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


let get = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'API com Express e Mongo',
    version: '0.0.2'
  })
})
let post = router.post('/', (req, res, next) => {
  res.status(201).send(req.body)
})

let put = router.put('/:id', (req, res, next) => {
  let id = req.params.id
  res.status(200).send({
    id: id,
    item: req.body
  })
})

let deleted = router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  res.status(200).send({
    id: id,
    item: req.body
  })
})

app.use('/', get)
app.use('/products', post)
app.use('/products', put)
app.use('/products', deleted)


module.exports = app