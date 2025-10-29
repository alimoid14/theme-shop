import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  getCart,
  updateCart,
  mergeCart,
  clearCart,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, updateCart);
router.post("/merge", verifyToken, mergeCart);
router.delete("/", verifyToken, clearCart);

export default router;
