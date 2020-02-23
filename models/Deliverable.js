const mongoose = require('mongoose');

const DeliverableSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course'
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  grade: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Deliverable = mongoose.model('deliverable', DeliverableSchema);
