const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect('mongodb://localhost/scamazon',{useNewUrlParser:true})

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const mainRoutes = require('./routes/main')

app.use(mainRoutes)

app.listen(5000, () => {
  console.log('listening on port' + 5000)
})

