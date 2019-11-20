const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const { MONGODB_URI } = process.env

const routes = require('./routes')
const authRoutes = require('./routes/auth')
const app = express()

require('./models').connect(MONGODB_URI)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist')))
app.use(passport.initialize())
app.use(cors())
app.use(helmet())
app.use(cookieParser())

const localSignupStrategy = require('./passport/localSignup')
const localLoginStrategy = require('./passport/localLogin')
passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

app.use('/auth', authRoutes)
app.use('/api', routes)

module.exports = app
