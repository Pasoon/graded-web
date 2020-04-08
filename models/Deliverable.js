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
    type: String
  },
  grade: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Deliverable = mongoose.model('deliverable', DeliverableSchema);
