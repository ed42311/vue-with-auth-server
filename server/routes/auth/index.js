const express = require('express')
const passport = require('passport')

const router = new express.Router()

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation.
 *
 */
function validateLoginForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (
    !payload ||
    typeof payload.email !== 'string' ||
    payload.email.trim().length === 0
  ) {
    isFormValid = false
    errors.email = 'Please provide your email address.'
  }

  if (
    !payload ||
    typeof payload.password !== 'string' ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false
    errors.password = 'Please provide your password.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.post('/register', (req, res, next) => {
  // const token = resp.data.token
  // const user = resp.data.user
  console.log(req.body);
  const validationResult = validateSignupForm(req.body)
  console.log(validationResult);
  res.json({'hello': 'hello'});
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    })
  }

//   return passport.authenticate('local-signup', err => {
//     if (err) {
//       console.log('error', err)
//       if (err.name === 'MongoError' && err.code === 11000) {
//         // the 11000 Mongo code is for a duplication email error
//         // the 409 HTTP status code is for conflict error
//         return res.status(409).json({
//           success: false,
//           message: 'Check the form for errors.',
//           errors: {
//             email: 'This email is already taken.'
//           }
//         })
//       }

//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       })
//     }

//     return res.status(200).json({
//       success: true,
//       message:
//         'You have successfully signed up! Now you should be able to log in.'
//     })
//   })(req, res, next)
// })

// router.post('/login', (req, res, next) => {
//   console.log(req)
//   const validationResult = validateLoginForm(req.body)
//   if (!validationResult.success) {
//     return res.status(400).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     })
//   }

//   return passport.authenticate('local-login', (err, token, userData) => {
//     if (err) {
//       if (err.name === 'IncorrectCredentialsError') {
//         return res.status(400).json({
//           success: false,
//           message: err.message
//         })
//       }

//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       })
//     }

//     return res.json({
//       success: true,
//       message: 'You have successfully logged in!',
//       token,
//       user: userData
//     })
//   })(req, res, next)
})

module.exports = router
