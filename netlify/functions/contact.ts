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
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"PNP Appraisal Inc." <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
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
