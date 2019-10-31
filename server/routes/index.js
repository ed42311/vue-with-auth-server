const express = require('express')
const router = express.Router()

const {
  allMessages,
  createMessage,
  deleteMessage,
  updateMessage,
  findMessageById
} = require('./message')

const {
  allProfiles,
  createProfile,
  deleteProfile,
  updateProfile,
  findProfileById
} = require('./profile')

router.get('/test', (req, res) => {
  console.log('test')
  res.json({ message: 'Minimal Test Call' })
})

// Profile routes
router.route('/profiles')
  .get(allProfiles)
  .post(createProfile)

router.route('/profile/:id')
  .get(findProfileById)
  .put(updateProfile)
  .delete(deleteProfile)

// Message routes
router.route('/messages')
  .get(allMessages)
  .post(createMessage)

router.route('/message/:id')
  .get(findMessageById)
  .put(updateMessage)
  .delete(deleteMessage)

module.exports = router
