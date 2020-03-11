const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

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

// @route   POST api/courses/
// @desc    Create course
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Course name is required')
        .not()
        .isEmpty(),
      check('code', 'Course Code is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, code } = req.body;

    // Build course object
    const courseFields = {};
    courseFields.user = req.user.id;
    if (name) courseFields.name = name;
    if (code) courseFields.code = code;

    try {
      let course = Course.findOne({ user: req.user.id });
      // Create
      course = new Course(courseFields);
      await course.save();
      res.json(course);
    } catch (err) {
      console.err(err.message);
      res.send(500).send('Server Error');
    }
  }
);

// @route   DELETE api/course/:id
// @desc    Delete a course
// @access  Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    //Check user
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await course.remove();
    res.json({ msg: 'Course removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PATCH api/courses/:id
// @desc    Edit a course
// @access  Private
router.patch('/:id', [auth], async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    //Check user
    if (course.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await course.updateOne(req.params.id, {
      name: req.body.name,
      code: req.body.code
    });
    res.json(course);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'course not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
