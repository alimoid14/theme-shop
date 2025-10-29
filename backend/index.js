import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cartRoutes from "./routes/cart.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json()); //allows us to access req.body
app.use(cookieParser()); //allows us to access req.cookies
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL, no * else credentials true will not work from frontend fetch
    credentials: true, //allow cookies to be sent
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/kleaner-clone/dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "kleaner-clone", "dist", "index.html")
    );
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server listening on port 3000");
});
