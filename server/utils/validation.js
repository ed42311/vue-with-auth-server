const validator = require('validator')

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP req body
 * @returns {object} The result of validation.
 *
 */
function validateSignupForm (payload) {
  const validate = {
    success: false,
    message: 'Check the error array for errors.',
    errors: []
  }

  if (!payload) {
    validate.errors.push('Payload empty or invalid.')
    return validate
  }

  const { email, password, givenName, familyName } = payload

  if (!validator.isEmail(email)) {
    validate.errors.push('Please provide a correct email address.')
  }

  if (password.trim().length < 8) {
    validate.errors.push('Password must have at least 8 characters.')
  }

  if (givenName.trim().length === 0) {
    validate.errors.push('Please provide your given name.')
  }

  if (familyName.trim().length === 0) {
    validate.errors.push('Please provide your family name.')
  }

  if (validate.errors.length <= 0) {
    validate.success = true
    validate.message = 'All fields valid'
  }
  return validate
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP req body
 * @returns {object} The result of validation.
 *
 */
function validateLoginForm (payload) {
  const validate = {
    success: false,
    message: 'Check the error array for errors.',
    errors: []
  }

  if (!payload) {
    validate.errors.push('Payload empty or invalid.')
    return validate
  }

  if (payload.email.trim().length === 0) {
    validate.errors.push('Please provide your email address.')
  }

  if (payload.password.trim().length === 0) {
    validate.errors.push('Please provide your password.')
  }

  if (validate.errors.length <= 0) {
    validate.success = true
    validate.message = 'All fields valid'
  }

  return validate
}

module.exports = {
  validateSignupForm,
  validateLoginForm
}
