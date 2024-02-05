const express = require("express");

const { AccountController } = require("../controllers/auth");

const router = express.Router();

router.post("/sign-up/", AccountController.signUpHandler);

router.post("/sign-in/", AccountController.signInHandler);

module.exports = router;
