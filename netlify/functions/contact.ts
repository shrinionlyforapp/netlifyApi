import nodemailer from 'nodemailer';

export const handler = async (event: any) => {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body.' }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"PNP Appraisal Inc." <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: `New Appraisal Request from ${data.firstName} ${data.lastName}`,
    text: `Message: ${data.message}`,
    html: `<p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
           <p><strong>Property Type:</strong> ${data.propertyType || 'N/A'}</p>
           <p><strong>Message:</strong> ${data.message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: info.messageId }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
