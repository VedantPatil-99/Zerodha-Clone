import {
	Signup,
	Login,
} from "../controllers/authControllers.js";
import express from "express";
import userVerification from "./../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

export default router;
