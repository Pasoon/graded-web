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
        grade: req.body.grade,
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

// @route   GET api/deliverables/:courseId
// @desc    Get all courses deliverables
// @access  Private
router.get('/:courseId', [auth], async (req, res) => {
  try {
    const deliverables = await Deliverable.find({
      course: req.params.courseId
    });
    if (!deliverables) {
      return res.status(404).json({ msg: 'deliverables not found' });
    }
    res.json(deliverables);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'deliverables not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/deliverables/:id
// @desc    Delete a deliverable
// @access  Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const deliverable = await Deliverable.findById(req.params.id);
    if (!deliverable) {
      return res.status(404).json({ msg: 'deliverable not found' });
    }
    await deliverable.remove();
    res.json({ msg: 'Deliverable removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'deliverables not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PATCH api/deliverables/:id
// @desc    Edit a deliverable
// @access  Private
router.patch('/:id', [auth], async (req, res) => {
  try {
    const deliverable = await Deliverable.findById(req.params.id);
    if (!deliverable) {
      return res.status(404).json({ msg: 'deliverable not found' });
    }
    var body = {};
    if (req.body.name) body.name = req.body.name;
    if (req.body.type) body.type = req.body.type;
    if (req.body.weight) body.weight = req.body.weight;
    if (req.body.grade) body.grade = req.body.grade;

    const updatedDeliverable = await Deliverable.findByIdAndUpdate(
      req.params.id,
      body,
      {
        new: true
      }
    );
    res.json(updatedDeliverable);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'deliverable not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
