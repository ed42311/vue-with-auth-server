const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = global.Promise
const db = process.env.NODE_ENV === 'dev'
  ? process.env.LOCAL_DB
  : process.env.MONGODB_URI

const routes = require('./routes')
const app = express()

require('./models').connect(db)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(cookieParser())

// TODO: break out routes and controllers
app.use('/api', routes)

module.exports = app
