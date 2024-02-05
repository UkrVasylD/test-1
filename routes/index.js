const express = require("express");

const router = express.Router();
const Middlewares = require("./../middlewares");

const Authorization = require("../middlewares/authorization");

const { authRouter } = require("./auth");

const userRouter = require("./user.router");

const contentRouter = require("./content.router");

router.use("/auth", authRouter);

router.get("/refreshToken", Authorization.refreshToken);

// ****************************** AUTH ******************************************

router.use(Authorization.requiredAuth);

router.use("/user", userRouter);

router.use("/content", contentRouter);

router.use(Middlewares.notFound);

router.use(Middlewares.errorHandler);

module.exports = router;
