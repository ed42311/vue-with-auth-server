const { LOG_LEVEL, NODE_ENV } = process.env
const logSet = NODE_ENV === 'dev'
module.exports = {
  log: (msg) => logSet && console.log(`${new Date()} -- ${msg} --`),
  error: (err) => logSet && console.log(`${new Date()} -- Error: ${err} --`)
}
