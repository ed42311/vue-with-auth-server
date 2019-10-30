const Message = require('../models/message')
const logger = require('../utils/logger')

module.exports = {
  allProfiles (req, res) {
    Message.find({})
      .exec((err, result) => {
        if (err) {
          console.error(err)
        }
        res.json(result)
      })
  },
  createMessage (req, res) {
    const message = new Message(req.body)

    message.create((err, newMessage) => {
      if (err) {
        console.error(err)
      }
      res.json({
        message: 'Your Message has been saved.',
        newMessage
      })
    })
  },
  deleteMessage (req, res) {
    Message.findByIdAndDelete({ _id: req.params._id }, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.status(204)
      }
    })
  },
  updateMessage (req, res) {
    const { _id, body } = req.params
    Message.findByIdAndUpdate({ _id }, body, (err, updatedMessage) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json({
          message: 'Build updated!',
          updatedMessage
        })
      }
    })
  },
  findMessageById (req, res) {
    const { id } = req.params
    Message.findById(id, (err, foundMessage) => {
      if (err) {
        logger.log(err)
        res.status(400).json({
          success: false,
          err
        })
      } else {
        let message = 'Message found!'
        if (!foundMessage) {
          message = 'Message not found.'
          return res.status(404).json({
            success: false,
            foundMessage
          })
        }
        return res.status(200).json({
          message,
          foundMessage
        })
      }
    })
  }
}
