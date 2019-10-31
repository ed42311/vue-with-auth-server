const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
require('dotenv').config()

const { MONGODB_URI } = process.env

const routes = require('./routes')
const app = express()

require('./models').connect(MONGODB_URI)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(cookieParser())
app.use('/api', routes)

module.exports = app
