const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  createDate: {
    type: String,
    required: true
  },
  lastModified: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'I am new!'
  },
  securities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Stock',
      //--->>>> QUANTITY ?????
    }
  ]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
