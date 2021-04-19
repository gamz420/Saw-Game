const { model, Schema } = require("mongoose");

const questionSchema = new Schema({
  text: {
    type: String,
  },
  answer: {
    type: String,
  },
  points: {
    type: Number,
  },
  answered: {
    type: Boolean,
  }
});

const QuestionModel = model('Questions', questionSchema);

module.exports = QuestionModel;
