const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Course = require('../../models/Course');
const User = require('../../models/User');

// @route   GET api/courses/me
// @desc    GET current users courses
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user.id });

    if (Array.isArray(courses)) {
      return res
        .status(400)
        .json({ msg: 'There are no courses for this user' });
    }

    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
