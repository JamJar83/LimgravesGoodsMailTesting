const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const Email = require('..');

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: 'your API KEY HERE'
  })
);

const email = new Email({
  message: {
    from: 'test@example.com'
  },
  // uncomment below to send emails in development/test env:
  // send: true
  // make sure we don't put password in here
  transport
});

email
  .send({
    template: 'Limgravesgoods',
    message: {
      to: 'Torrent@limgravesgoods.com'
    },
    locals: {
      name: 'Torrent'
    }
  })
  .then(console.log)
  .catch(console.error);
