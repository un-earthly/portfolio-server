const router = require("express").Router();
const messageController = require("../controllers/message.controller")


router.get('/list', messageController.getMessageList);
router.post("/insert", messageController.insertMassage);
router.patch("/update/:id", messageController.updateMassage);
router.delete("/delete/:id", messageController.deleteMassage);


module.exports = router