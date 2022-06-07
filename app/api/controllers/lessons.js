const lessonModel = require("../models/lessons");
module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    lessonModel.findById(req.params.lessonId, function (err, lessonInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "lesson found!!!",
          data: { lessons: lessonInfo },
        });
      }
    });
  },
  getAll: function (req, res, next) {
    let lessonsList = [];
    lessonModel.find({}, function (err, lessons) {
      if (err) {
        next(err);
      } else {
        for (let lesson of lessons) {
          lessonsList.push({
            id: lesson._id,
            name: lesson.name,
            released_on: lesson.released_on,
          });
        }
        res.json({
          status: "success",
          message: "lessons list found!!!",
          data: { lessons: lessonsList },
        });
      }
    });
  },
  updateById: function (req, res, next) {
    lessonModel.findByIdAndUpdate(
      req.params.lessonId,
      { name: req.body.name },
      function (err, lessonInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "lesson updated successfully!!!",
            data: null,
          });
        }
      }
    );
  },
  deleteById: function (req, res, next) {
    lessonModel.findByIdAndRemove(req.params.lessonId, function (err, lessonInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "lesson deleted successfully!!!",
          data: null,
        });
      }
    });
  },
  create: function (req, res, next) {
    lessonModel.create(
      { name: req.body.name, released_on: req.body.released_on },
      function (err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "lesson added successfully!!!",
            data: null,
          });
      }
    );
  },
};
