const express = require("express");
const userController = require("../controllers/userControler");
const router = express.Router();

router.get("/alunos", userController.all)

router.post("/novo", userController.create)

module.exports = router;