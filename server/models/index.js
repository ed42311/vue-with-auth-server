const mongoose = require('mongoose')

module.exports.connect = (uri) => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
  mongoose.connect(uri, options)
  mongoose.Promise = global.Promise

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`)
    process.exit(1)
  })

  // load models
  require('./profile')
  require('./message')
}
