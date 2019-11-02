const { validateSignupForm, validateLoginForm } = require('../../utils/validation')

describe('validateSignupForm() - validates the client signup form', () => {
  it('should return validate.success false when no payload is present', () => {
    expect(validateSignupForm().success).to.eql(false)
  })

  it('onshould contain an validate.errors array that gives user feedback about errors', () => {
    const payload = {
      email: 'testemail.com',
      password: '12789',
      givenName: '',
      familyName: ''
    }
    const { success, errors } = validateSignupForm(payload)
    expect(success).to.eql(false)
    expect(errors).to.include('Password must have at least 8 characters.')
    expect(errors).to.include('Please provide a correct email address.')
    expect(errors).to.include('Please provide your given name.')
    expect(errors).to.include('Please provide your family name.')
  })

  it('should return validate.success true when payload is valid', () => {
    const payload = {
      email: 'test@email.com',
      password: '123456789',
      givenName: 'Cruela',
      familyName: 'DeVille'
    }
    expect(validateSignupForm(payload).success).to.eql(true)
  })
})

describe('validateLoginForm() - validates the client login form', () => {
  it('should return validate.success false when no payload is present', () => {
    expect(validateLoginForm().success).to.eql(false)
  })

  it('should contain an validate.errors array that gives user feedback about errors', () => {
    const payload = {
      email: '',
      password: ''
    }
    const { success, errors } = validateLoginForm(payload)
    expect(success).to.eql(false)
    expect(errors).to.include('Please provide your email address.')
    expect(errors).to.include('Please provide your password.')
  })

  it('should return validate.success true when payload is valid', () => {
    const payload = {
      email: 'test@email.com',
      password: '123456789'
    }
    expect(validateLoginForm(payload).success).to.eql(true)
  })
})
