var path = require('path');
var express = require('express');
var nodemailer = require("nodemailer");

var app = express();
// create reusable transporter object using the default SMTP transport 
var email = process.env.EMAIL;
var password = process.env.EMAIL_PASSWORD;
var transporter = nodemailer.createTransport('smtps://' + email + ':' + password + '@smtp.gmail.com');

app.use(express.static('public'));

app.get('/send',function(req, res) {
  var sender = req.query.name + " <" + req.query.email + ">";
  var mailOptions = {
    from: sender, // sender address 
    to: 'katelouisew@gmail.com', // list of receivers 
    subject: req.query.message.substring(0, 15), // Subject line 
    text: req.query.message + "\n\nsent from " + req.query.email // plaintext body 
  };
  console.log(JSON.stringify(mailOptions));
   
  // send mail with defined transport object 
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Unable to send email');
    } else {
      console.log('Message sent: ' + info.response);
      res.end("Email sent");  
    }
  });
});

/*

var staticPath = path.resolve(__dirname, '/public');
app.use(express.static(staticPath));

app.get('*', function(req, res) {
  res.sendFile('index.html', { root: './public/' })
});
*/

app.listen((process.env.PORT || 3000), function() {
  console.log('listening on 3000');
});