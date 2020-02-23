const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  gradeletter: {
    type: String
  },
  grade: {
    type: String
  },
  deliverables: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'deliverable'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Course = mongoose.model('course', CourseSchema);
