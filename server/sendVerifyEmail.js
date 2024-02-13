const sgMail = require('@sendgrid/mail');

function sendVerifyEmail(email) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email, // recipient
    from: 'kevinjunk3332@gmail.com', // All emails sent from my junk email
    subject: 'Chess - Verify your email address',
    text: 'Click below to verify!',
    html: '<strong>To verify your email, click the following link:</strong>',
  };

  return sgMail.send(msg);
}

module.exports = sendVerifyEmail;
