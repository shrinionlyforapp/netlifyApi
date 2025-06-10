const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const data = JSON.parse(event.body);

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
           <p><strong>Phone:</strong> ${data.phone}</p>
           <p><strong>Property Type:</strong> ${data.propertyType}</p>
           <p><strong>Message:</strong> ${data.message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: info.messageId }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
