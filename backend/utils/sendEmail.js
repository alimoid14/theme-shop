import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  try{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    
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
}catch(error){
  console.log(error);
}
};
