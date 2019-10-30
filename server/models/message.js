const mongoose = require('mongoose')

const Schema = mongoose.Schema
const model = mongoose.model.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId

const MessageSchema = new Schema({
  id: ObjectId,
  title: String,
  body: String
}, { timestamps: true })

module.exports = model('Message', MessageSchema)
