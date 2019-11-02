const jwt = require('jsonwebtoken')
const Profile = require('../models/profile')
const PassportLocalStrategy = require('passport-local').Strategy
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
  const profileData = {
    _id: mongoose.Types.ObjectId(),
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  }

  const profile = new Profile(profileData)
  profile.create((err, newProfile) => {

    if (err) { return done(err) }

    const payload = {
      sub: profile._id
    }
    const token = jwt.sign(payload, config.jwtSecret)

    return done(token, newProfile)
  })
})
