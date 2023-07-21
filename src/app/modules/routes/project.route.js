const router = require("express").Router();
const projectController = require("../controllers/project.controller")


router.get('/list', projectController.getProjectList);
router.post("/insert",projectController.insertProject);

module.exports = router