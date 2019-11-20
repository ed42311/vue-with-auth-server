const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema
const model = mongoose.model.bind(mongoose)
const { log } = require('../utils/logger')

const ModelType = 'Profile'

// define the User model schema
const ProfileSchema = new Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  givenName: String,
  familyName: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'USER'
  },
  chillAccept: {
    type: Boolean
  },
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
ProfileSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()
  this.wasNew = this.isNew

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError) }

    return bcrypt.hash(this.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError) }

      // replace a password string with hash value
      this.password = hash

      return next()
    })
  })
})

/**
 * The post-save hook method.
 */
ProfileSchema.post('save', function () {
  if (this.wasNew) {
    log(`New ${ModelType} Created: ${this._id}`)
    return
  }
  log(`${ModelType} updated: ${this._id}`)
})

module.exports = model(ModelType, ProfileSchema)
