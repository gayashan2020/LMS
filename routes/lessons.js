const express = require("express");
const router = express.Router();
const lessonController = require("../app/api/controllers/lessons");
router.get("/", lessonController.getAll);
router.post("/", lessonController.create);
router.get("/:lessonId", lessonController.getById);
router.put("/:lessonId", lessonController.updateById);
router.delete("/:lessonId", lessonController.deleteById);
module.exports = router;
