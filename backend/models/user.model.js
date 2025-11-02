import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  id: {
    type: String, // product/theme ID from frontend
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    cart: {
      type: [cartItemSchema], // array of cart items
      default: [],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    // resetPasswordToken: String,
    // resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },

  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
