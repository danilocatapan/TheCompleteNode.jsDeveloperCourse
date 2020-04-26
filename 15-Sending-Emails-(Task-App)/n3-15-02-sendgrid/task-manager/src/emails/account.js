const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
  to: 'dcatapan@gmail.com',
  from: 'dcatapan@gmail.com',
  subject: 'teste sendGril',
  text: 'testando sendgrid 123.'
})