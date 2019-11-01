const Profile = require('../models/profile')
const PassportLocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')

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

  const newUser = new Profile(profileData)
  newUser.save((err) => {
    if (err) { return done(err) }

    return done(null)
  })
})
