var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth : {
			user: 'mdjunaid1993@gmail.com',
			pass: 'shaheentaj'
		}
	});

	var mailOptions = {
		from : 'John Doe <johndoe@gmail.com>',
		to: 'mjunaid6404@gmail.com',
		subject: 'Website Submission',
		text: 'You have a new submission mail with the following details...Name : '+req.body.name+ 'Email: '+req.body.email+' Message: '+req.body.message,
		html: '<p>You got a new submission with the following details<p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions,function(err, info){
		if(err) {
		console.log(err);
		res.redirect('/');
	}else {
		console.log('Message Sent: '+info.response);
		res.redirect('/');
		}

	});
});
module.exports = router; 
