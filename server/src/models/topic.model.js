const { model, Schema } = require("mongoose");

const topicSchema = new Schema({
  name: {
    type: String,
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Questions',
  }]
});

const TopicModel = model('Topics', topicSchema);

module.exports = TopicModel;
