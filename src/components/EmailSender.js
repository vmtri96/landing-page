'use server';

import nodemailer from 'nodemailer';

export const sendEmail = async (formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ntnghia.it01@gmail.com',
      pass: 'rtoo iqzg wjxu vsld',
    },
  });

  const mailOptions = {
    from: 'ntnghia.it01@gmail.com',
    to: 'ntnghia.it01@gmail.com',
    subject: 'Contact form Smart Code Solutions',
    text: `Gmail: ${formData.email}.<br/>Name: ${formData.name}.<br/>Message: ${formData.message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};