import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-mail", async (req, res) => {
  const { name, email, paket, poruka } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Party Obrt" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `Nova rezervacija – ${paket}`,
      html: `
        <h3>Nova rezervacija</h3>
        <p><b>Ime:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Paket:</b> ${paket}</p>
        <p><b>Poruka:</b><br/>${poruka}</p>
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server radi na portu 5000");
});
