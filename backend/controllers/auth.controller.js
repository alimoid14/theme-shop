import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = generateVerificationToken(); //otp

    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 1 day
    });

    await user.save();

    await sendEmail(
      email,
      "Verify your email",
      `Your verification code is ${verificationToken}. It expires in 1 day.`
    );

    //jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  const message = req.cookies.token
    ? "Logged out successfully"
    : "Already logged out";
  res.clearCookie("token");
  res.status(200).json({ success: true, message: message });
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const userId = req.userId;
    const { otp } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    if (user.verificationToken !== otp)
      return res.status(400).json({ message: "Invalid OTP" });
    if (user.verificationTokenExpiresAt < Date.now()) {
      const newOtp = generateVerificationToken();
      user.verificationToken = newOtp;
      user.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
      await user.save();
      sendEmail(
        user.email,
        "Verify your email",
        `Your verification code is ${newOtp}. It expires in 1 day.`
      );
      return res.status(400).json({
        message: "OTP expired. A new OTP has been sent, please verify again",
      });
    }

    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.resetTokenExpiresAt > Date.now())
      return res.status(400).json({
        message: "You have an active reset code, please check your email",
      });

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

    user.resetToken = resetToken;
    user.resetTokenExpiresAt = resetTokenExpiresAt;
    await user.save();

    sendEmail(
      user.email,
      "Reset your password",
      `Your reset link is ${process.env.CLIENT_URL}/reset-password/${resetToken}. It expires in 1 hour.`
    );

    res.status(200).json({ message: "Reset code sent successfully" });
  } catch (error) {
    //console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user)
      res.status(404).json({ message: "Invalid user or token expired" });

    //update password

    const hashedPassword = await bcryptjs.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiresAt = undefined;
    await user.save();

    await sendEmail(
      user.email,
      "Password reset successfully",
      `Your password has been reset successfully.`
    );

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const resendVerificationOTP = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    if (user.verificationTokenExpiresAt > Date.now())
      return res.status(400).json({
        message:
          "You have an active verification code, please check your email",
      });

    const newOtp = generateVerificationToken();
    user.verificationToken = newOtp;
    user.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 1 day
    await user.save();
    sendEmail(
      user.email,
      "Verify your email",
      `Your verification code is ${newOtp}. It expires in 1 day.`
    );

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
