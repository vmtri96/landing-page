'use server';

const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const sendCustomerEmail = async ({ name, email }) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Cảm ơn Quý khách đã liên hệ với Smart Code Solutions',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>Kính gửi Quý khách ${name},</p>
        
        <p>Smart Code Solutions xin chân thành cảm ơn Quý khách đã quan tâm và gửi thông tin liên hệ đến chúng tôi qua biểu mẫu hỗ trợ.</p>
        
        <p>Chúng tôi đã nhận được yêu cầu của Quý khách và rất trân trọng cơ hội được kết nối và đồng hành cùng Quý khách trong việc phát triển các giải pháp phần mềm phù hợp với nhu cầu thực tiễn.</p>
        
        <p>Đội ngũ Smart Code Solutions sẽ chủ động liên hệ lại với Quý khách qua thông tin đã cung cấp trong thời gian sớm nhất để trao đổi chi tiết hơn.</p>
        
        <p>Một lần nữa, xin cảm ơn sự tin tưởng của Quý khách!</p>
        
        <p>Trân trọng,<br>
        Smart Code Solutions<br>
        Website: <a href="https://www.smartcodesolutions.vn">https://www.smartcodesolutions.vn</a><br>
        Email: smartcodesolutions@gmail.com<br>
        Hotline: 0973 023 736</p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

const sendAdminEmail = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
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
    console.error('Error sending email:', error);
    throw error;
  }
};

export { sendEmail };