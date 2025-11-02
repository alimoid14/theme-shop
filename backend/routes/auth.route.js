import express from "express";
import {
  login,
  logout,
  signup,
  checkAuth,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/verify", verifyToken, verifyEmail);
router.post("/login", login);
router.post("/logout", logout);
export default router;
