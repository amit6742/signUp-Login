const express = require("express");
const userController = require("../controller/index");
const router = express.Router();

router

  .post("/", userController.createUser)
  .post("/v1", userController.loginUser)
  .get("/", userController.getUser)
  .patch("/:id", userController.updateUser)

  .delete("/:id ", userController.deleteUser);

  exports.router = router