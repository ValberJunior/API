const express = require("express");
const studentController = require("../controllers/studentControler");
const router = express.Router();

//get
router.get("/alunos", studentController.all);

router.get("/alunos/:id", studentController.getForParams);

// patch and post 
// router.patch("/alunos", studentController.update);
router.post("/alunos", studentController.update);

//post
router.post("/novo", studentController.create);

//delete
router.delete("/alunos/:id", studentController.delete);

module.exports = router;