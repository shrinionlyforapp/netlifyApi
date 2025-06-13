
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'noreply@pnpappraisal.com',
    pass: 'rxfg wfoe kjra lfvd',
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendContactEmail = async (contactData: any) => {
  try {
    const mailOptions = {
      from: `"PNP Appraisal Inc." <noreply@pnpappraisal.com>`,
      to: 'info@pnpappraisal.com',
      replyTo: contactData.email,
      subject: `New Appraisal Request from ${contactData.firstName} ${contactData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1F2937; border-bottom: 2px solid #D97706; padding-bottom: 10px;">New Appraisal Request</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Property Details</h3>
            <p><strong>Property Type:</strong> ${contactData.propertyType}</p>
            <p><strong>Property Address:</strong> ${contactData.propertyAddress || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the PNP Appraisal Inc. contact form.<br>
              Reply directly to this email to respond to the inquiry.
            </p>
          </div>
        </div>
      `,
      text: `
New Appraisal Request

Contact Information:
Name: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Phone: ${contactData.phone}

Property Details:
Property Type: ${contactData.propertyType}
Property Address: ${contactData.propertyAddress || 'Not provided'}

Message:
${contactData.message}
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
