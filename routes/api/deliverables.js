const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Deliverable = require('../../models/Deliverable');
const Course = require('../../models/Course');
const User = require('../../models/User');

// @route   POST api/deliverables/:courseId
// @desc    Create a deliverable
// @access  Private
router.post(
  '/:courseId',
  [auth],
  [
    check('name', 'Deliverable name is required')
      .not()
      .isEmpty(),
    check('type', 'Deliverable Type is required')
      .not()
      .isEmpty(),
    check('weight', 'Deliverable Weight is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newDeliverable = new Deliverable({
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        course: req.params.courseId
      });

      const deliverable = await newDeliverable.save();

      res.json(deliverable);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    const course = await Course.findById(req.params.courseId);
  }
);

module.exports = router;
