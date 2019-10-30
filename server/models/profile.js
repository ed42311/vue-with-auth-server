const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const model = mongoose.model.bind(mongoose)

// define the User model schema
const ProfileSchema = new Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  type: String,
  avatar: Buffer
}, { timestamps: true })

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
ProfileSchema.methods.comparePassword = (password, callback) => {
  bcrypt.compare(password, this.password, callback)
}

/**
 * The pre-save hook method.
 */
ProfileSchema.pre('save', (next) => {
  const user = this

  if (!user.isModified('password')) return next()

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError) }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError) }

      // replace a password string with hash value
      user.password = hash
      user.created_at = new Date()

      return next()
    })
  })
})

module.exports = model('Profile', ProfileSchema)
