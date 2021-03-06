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
  // registerNewProfile
} = require('./profile')

router.get('/test', (req, res) => {
  res.json({ message: 'Minimal Test Call' })
})

// router.route('/register').post(registerNewProfile)

// Profile routes
router
  .route('/profiles')
  .get(allProfiles)
  .post(createProfile)

router
  .route('/profile/:id')
  .get(findProfileById)
  .put(updateProfile)
  .delete(deleteProfile)

router
  .route('/profile/:profile_id/message/:message_id')

// Message routes
router
  .route('/messages')
  .get(allMessages)
  .post(createMessage)

router
  .route('/message/:id')
  .get(findMessageById)
  .put(updateMessage)
  .delete(deleteMessage)

module.exports = router
