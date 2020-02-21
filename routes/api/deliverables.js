const express = require('express');
const router = express.Router();

// @route   GET api/deliverables
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Deliverables route'));

module.exports = router;
