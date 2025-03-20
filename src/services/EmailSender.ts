'use server';

import { ContactForm } from '@/models/Contact';
import nodemailer from 'nodemailer';

export const sendEmail = async (formData: ContactForm) => {
  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
  const RECEIVERS = process.env.GMAIL_APP_RECEIVERS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'smartcodesolutions.vn@gmail.com',
    to: RECEIVERS,
    subject: 'A new contact from Smart Code Solutions',
    text: `Gmail: ${formData.email}.
      Name: ${formData.name}.
      Phone number: ${formData.phoneNumber}.
      Message: ${formData.message}.`,
  };

  return await transporter.sendMail(mailOptions);
};