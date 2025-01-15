import express from 'express';
import {authMiddleware} from '../middleware/authMiddleware.js';
import {
	createUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
	loginUser,
	googleCallback,
} from '../controller/userController.js';
import passport from "passport";

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);

router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));
router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/login"}), googleCallback);

router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

export default router;
