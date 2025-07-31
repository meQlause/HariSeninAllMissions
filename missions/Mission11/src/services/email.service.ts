import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const setUpSMTP = (): nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options> => {
  return nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export const sendVerificationEmailTo = (account: string, token: string) => {
  const transporter = setUpSMTP();
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: account,
    subject: 'Verify your email',
    html: `
            <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <div style="padding: 40px; background-color: #f4f6f8;">
                <h2 style="color: #2c3e50; margin-bottom: 10px;">🔒 Verify Your Email Address</h2>
                <p style="font-size: 16px; color: #606f7b; line-height: 1.5;">
                  Hello,<br><br>
                  Thanks for signing up! To get started, please verify your email address by clicking the button below:
                </p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${process.env.SERVER}/api/user/verify?email=${encodeURIComponent(account)}&token=${token}"
                     style="background-color: #6366f1; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500; display: inline-block;">
                    ✅ Verify Email
                  </a>
                </div>
                <p style="font-size: 14px; color: #95a5a6;">
                  If you did not request this email, you can safely ignore it.
                </p>
              </div>
              <div style="background-color: #2c3e50; color: #bdc3c7; padding: 20px; text-align: center; font-size: 12px;">
                &copy; ${new Date().getFullYear()} Educourse. All rights reserved.
              </div>
            </div>
`

  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}