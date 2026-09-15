import nodemailer from "nodemailer";

export const createContact = async (req, res) => {
  try {
    const { fullName, email, phone, website, projectDescription } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "xenkoratechnologies@gmail.com",
      subject: `New Project Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #0f172a; color: #f8fafc; border-radius: 8px;">
          <h2 style="color: #38bdf8; border-bottom: 2px solid #334155; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone || "Not Provided"}</p>
          <p><strong>Website / Portfolio:</strong> ${website || "Not Provided"}</p>
          <p><strong>Project Description / Scope:</strong></p>
          <p style="background: #1e293b; padding: 15px; border-left: 4px solid #38bdf8; border-radius: 4px; color: #e2e8f0;">${projectDescription}</p>
        </div>
      `,
    };

    // Email send karein
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Server error, failed to send email.",
    });
  }
};
