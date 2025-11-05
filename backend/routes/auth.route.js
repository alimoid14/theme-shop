import express from "express";
import {
  login,
  logout,
  signup,
  checkAuth,
  verifyEmail,
  forgotPassword,
  resetPassword,
  resendVerificationOTP,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup);
router.post("/verify", verifyToken, verifyEmail);
router.put("/verify", verifyToken, resendVerificationOTP);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
export default router;
