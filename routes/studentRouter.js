const express = require("express");
const studentController = require("../controllers/studentControler");
const router = express.Router();

//get
router.get("/alunos", studentController.all);

router.get("/alunos/:id", studentController.getForParams);

// patch
router.patch("/alunos", studentController.update);

//post
router.post("/novo", studentController.create);

//delete
router.delete("/apagar/:id", studentController.delete);

module.exports = router;