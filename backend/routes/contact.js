const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post("/", async (req, res) => {

    const { name, email, subject, message } = req.body;

    try {

        await transporter.sendMail({

            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

            to: process.env.EMAIL_USER,

            subject: `Portfolio Contact: ${subject}`,

            html: `
                <h2>New Portfolio Message</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Subject:</strong> ${subject}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `,
        });

        await transporter.sendMail({
            from: `"Dipesh Das" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thanks for contacting me!",
            html: `
                <h2>Hi ${name},</h2>

                <p>
                    Thank you for reaching out through my portfolio website.
                </p>

                <p>
                    I've received your message and will get back to you as soon as possible.
                </p>

                <br>

                <p>
                    Have a great day!
                </p>

                <br>

                <p>
                    Regards,
                </p>

                <h3>Dipesh Das</h3>

                <p>Software Developer</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send email",
        });

    }

});

module.exports = router;