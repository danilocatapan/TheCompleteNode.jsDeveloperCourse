const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dcatapan@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  }).catch((error) => {
    console.log({
      'error': error
    })
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'dcatapan@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`
  }).catch((error) => {
    console.log({
      'error': error
    })
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}