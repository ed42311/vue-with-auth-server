const express = require('express')
const passport = require('passport')
const { validateSignupForm, validateLoginForm } = require('../../utils/validation')
const { error } = require('../../utils/logger')

const router = new express.Router()

// TODO: Match form pattern on the client
// const token = resp.data.token
// const user = resp.data.user

router.post('/register', (req, res, next) => {
  const validationResult = validateSignupForm(req.body)

  if (!validationResult.success) {
    return res.status(400).json(validationResult)
  }

  return passport.authenticate('local-signup', function (err, token, profile) {
    if (err) {
      error(err)
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: [
            'This email is already taken.'
          ]
        })
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      })
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.',
      token,
      profile
    })
  })(req, res, next)
})

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body)
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        })
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      })
    }

    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    })
  })(req, res, next)
})

module.exports = router
