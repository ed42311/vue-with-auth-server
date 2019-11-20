const jwt = require('jsonwebtoken')
const Profile = require('../models/profile')
const PassportLocalStrategy = require('passport-local').Strategy
const { log } = require('../utils/logger')
const mongoose = require('mongoose')
const config = require('../config')

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const { givenName, familyName, chillBox } = req.body
  const profileData = {
    _id: mongoose.Types.ObjectId(),
    email: email.trim(),
    password: password.trim(),
    givenName: givenName.trim(),
    familyName: familyName.trim(),
    chillAccept: chillBox
  }

  Profile.create(profileData, function (err, newProfile) {
    if (err) {
      return done(err)
    }
    const payload = {
      sub: newProfile._id
    }
    const token = jwt.sign(payload, config.jwtSecret)
    log(`Token Created: ${token}`)

    return done(null, token, newProfile)
  })
})
