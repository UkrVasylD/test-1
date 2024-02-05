const express = require("express");

const router = express.Router();
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
 * /getAllUsers:
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
const User = require("../controllers/user.controller");

router.get("/getAllUsers", User.getAllUsers);

router.get("/:targetId", User.getUserById);

module.exports = router;
