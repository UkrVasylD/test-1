const express = require("express");

const router = express.Router();
const Middlewares = require("./../middlewares");

const Authorization = require("../middlewares/authorization");

const authRouter = require("./auth.router");

const userRouter = require("./user.router");

const contentRouter = require("./content.router");

router.use("/auth", authRouter);

/**
 * @swagger
 * components:
 *   schemas:
 *     Tests:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: Tests
 *   description: The Tests managing API
 */

/**
 * @swagger
 * /refreshToken:
 *   get:
 *     summary: access refresh token
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: authorization
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/refreshToken", Authorization.refreshToken);

// ****************************** AUTH ******************************************

router.use(Authorization.requiredAuth);

router.use("/user", userRouter);

router.use("/content", contentRouter);

router.use(Middlewares.notFound);

router.use(Middlewares.errorHandler);

module.exports = router;
