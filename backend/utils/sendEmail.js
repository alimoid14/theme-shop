import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    //service: "gmail",
    host: "smtp.gmail.com", // explicit instead of "service"
    port: 587, // STARTTLS port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: `Theme Shop <${process.env.NODEMAILER_EMAIL}>`,
    to,
    subject,
    text,
  });
};
