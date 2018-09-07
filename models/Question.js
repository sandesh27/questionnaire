// Question.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Question = new Schema({
  v_name:  {
    type: String
  },
  q_text: {
    type: String
  },
  q_title: {
    type: String
  },
  a_list: {
    type: String
  }
},{
    collection: 'questions'
});

module.exports = mongoose.model('Question', Question);
