
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (contactData: any) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'prakashpanchal@pnpappisers.com',
    subject: 'New Appraisal Request',
    html: `
      <h2>New Appraisal Request</h2>
      <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone}</p>
      <p><strong>Property Type:</strong> ${contactData.propertyType}</p>
      <p><strong>Property Address:</strong> ${contactData.propertyAddress || 'Not provided'}</p>
      <p><strong>Message:</strong> ${contactData.message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};
