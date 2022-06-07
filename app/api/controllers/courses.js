const courseModel = require("../models/courses");
module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    courseModel.findById(req.params.courseId, function (err, courseInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Course found",
          data: { courses: courseInfo },
        });
      }
    });
  },
  getAll: function (req, res, next) {
    let courseList = [];
    courseModel.find({}, function (err, courses) {
      if (err) {
        next(err);
      } else {
        for (let course of courses) {
          courseList.push({
            id: course._id,
            name: course.name,
            created_on: course.created_on,
          });
        }
        res.json({
          status: "success",
          message: "course list found",
          data: { courses: courseList },
        });
      }
    });
  },
  updateById: function (req, res, next) {
    courseModel.findByIdAndUpdate(
      req.params.courseId,
      { name: req.body.name },
      function (err, courseInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Course updated successfully",
            data: null,
          });
        }
      }
    );
  },
  deleteById: function (req, res, next) {
    courseModel.findByIdAndRemove(req.params.courseId, function (err, courseInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Course deleted successfully",
          data: null,
        });
      }
    });
  },
  create: function (req, res, next) {
    courseModel.create(
      { name: req.body.name, created_on: req.body.created_on, included_lessons: req.body.included_lessons },
      function (err, result) {
          console.log(req.body.name, req.body.created_on, req.body.included_lessons);
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "course added successfully!!!",
            data: null,
          });
      }
    );
  },
};
