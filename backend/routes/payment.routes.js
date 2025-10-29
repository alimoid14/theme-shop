import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getKey,
  paymentVerification,
  processPayment,
} from "../controllers/payment.controller.js";

const router = express.Router();
router.post("/", verifyToken, processPayment);
router.get("/key", verifyToken, getKey);
router.post("/verify", verifyToken, paymentVerification);

export default router;
