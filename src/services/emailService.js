"use server";

import nodemailer from "nodemailer";

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "smartcodesolutions.vn@gmail.com",
    pass: "lgtk odua nnik qqse",
  },
});

const sendCustomerEmail = async ({ name, email }) => {
  const mailOptions = {
    from: "smartcodesolutions.vn@gmail.com",
    to: email,
    subject:
      "Cảm ơn Quý khách đã liên hệ với Smart Code Digital Solutions Co., Ltd.",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Kính gửi Quý khách ${name},</p>
        
        <p>Smart Code Digital Solutions Co., Ltd. xin chân thành cảm ơn Quý khách đã quan tâm và gửi thông tin liên hệ đến chúng tôi qua biểu mẫu hỗ trợ.</p>
        
        <p>Chúng tôi đã nhận được yêu cầu của Quý khách và rất trân trọng cơ hội được kết nối và đồng hành cùng Quý khách trong việc phát triển các giải pháp phần mềm phù hợp với nhu cầu thực tiễn.</p>
        
        <p>Đội ngũ Smart Code Digital Solutions Co., Ltd. sẽ chủ động liên hệ lại với Quý khách qua thông tin đã cung cấp trong thời gian sớm nhất để trao đổi chi tiết hơn.</p>
        
        <p>Một lần nữa, xin cảm ơn sự tin tưởng của Quý khách!</p>
        
        <p>Trân trọng,<br>
        Smart Code Digital Solutions Co., Ltd.<br>
        Website: <Link href="https://www.smartcodesolutions.vn">https://www.smartcodesolutions.vn</Link><br>
        Email: smartcodesolutions.vn@gmail.com<br>
        Hotline: 0967 476 659</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

const sendAdminEmail = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: "smartcodesolutions.vn@gmail.com",
    to: "smartcodesolutions.vn@gmail.com, ntnghia.it01@gmail.com, vmtri96@gmail.com ",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
};

const sendEmail = async (formData) => {
  try {
    // Send email to customer
    await sendCustomerEmail(formData);

    // Send email to admin
    await sendAdminEmail(formData);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export { sendEmail };
