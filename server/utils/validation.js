const validator = require('validator')

/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation.
 *
 */
function validateSignupForm(payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  if (
    !payload ||
    typeof payload.email !== 'string' ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false
    errors.email = 'Please provide a correct email address.'
  }

  if (
    !payload ||
    typeof payload.password !== 'string' ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false
    errors.password = 'Password must have at least 8 characters.'
  }

  if (
    !payload ||
    typeof payload.firstName !== 'string' ||
    payload.firstName.trim().length === 0
  ) {
    isFormValid = false
    errors.name = 'Please provide your given name.'
  }

  if (
    !payload ||
    typeof payload.lastName !== 'string' ||
    payload.lastName.trim().length === 0
  ) {
    isFormValid = false
    errors.name = 'Please provide your family name.'
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

module.exports = {
  validateSignupForm,
  validateLoginForm
}