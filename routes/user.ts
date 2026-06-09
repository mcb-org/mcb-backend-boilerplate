import express from "express";

const router = express.Router();

//import controllers
import { getAllUsers, getUser } from "../controllers";

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 *       404:
 *         description: Users not found
 */
router.route("/").get(getAllUsers);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.route("/:id").get(getUser);

export { router as userRouter };
