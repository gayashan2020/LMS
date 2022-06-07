const express = require("express");
const router = express.Router();
const courseController = require("../app/api/controllers/courses");
router.get("/", courseController.getAll);
router.post("/", courseController.create);
router.get("/:courseId", courseController.getById);
router.put("/:courseId", courseController.updateById);
router.delete("/:courseId", courseController.deleteById);
module.exports = router;
