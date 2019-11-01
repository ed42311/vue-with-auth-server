const Profile = require('../models/profile')
const logger = require('../utils/logger')

module.exports = {
  allProfiles (req, res) {
    Profile.find({})
      .exec((err, result) => {
        if (err) {
          console.error(err)
        }
        res.json(result)
      })
  },
  createProfile (req, res) {
    const profile = new Profile(req.body)

    profile.create((err, profile) => {
      if (err) {
        console.error(err)
      }
      res.json({
        message: 'Your Profile has been saved.',
        profile
      })
    })
  },
  registerNewProfile (req, res) {
    const profile = new Profile(req.body)

    profile.create((err, profile) => {
      if (err) {
        console.error(err)
      }
      res.json({
        message: 'Your Profile has been saved.',
        profile
      })
    })
  },
  deleteProfile (req, res) {
    Profile.findByIdAndDelete({ _id: req.params._id }, (err) => {
      if (err) {
        res.send(err)
      } else {
        res.status(204)
      }
    })
  },
  updateProfile (req, res) {
    const { _id, body } = req.params
    Profile.findByIdAndUpdate({ _id }, body, (err, profile) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json({
          message: 'Build updated!',
          profile
        })
      }
    })
  },
  findProfileById (req, res) {
    const { id } = req.params
    Profile.findById(id, (err, profile) => {
      if (err) {
        logger.log(err)
        res.status(400).json({
          success: false,
          err
        })
      } else {
        let message = 'Profile found!'
        if (!profile) {
          message = 'Profile not found.'
          return res.status(404).json({
            success: false,
            message
          })
        }
        return res.status(200).json({
          message,
          profile
        })
      }
    })
  }
}
