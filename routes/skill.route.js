const router = require("express").Router();
const skillController = require("../controllers/skill.controller")

router.get('/list', skillController.getSkillList);
router.post('/insert', skillController.insertSkill);
router.patch('/update/:id', skillController.updateSkill);
router.delete('/delete/:id', skillController.deleteSkill);
module.exports = router