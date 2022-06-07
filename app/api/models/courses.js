const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  created_on: {
    type: Date,
    trim: true,
    required: true,
  },
  included_lessons: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model("Course", CourseSchema);
