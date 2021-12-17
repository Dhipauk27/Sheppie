var nodemailer = require("nodemailer");
require('dotenv').config();

var email;
if(process.env.EMAIL_USER){
	email = process.env.EMAIL_USER
}
else{
	email = 'dhipauk27@gmail.com'
}


const from = `"Sheppie Virtual Agent" `+ email;
function setup() {
    //console.log('process.env.EMAIL_HOST', process.env.EMAIL_HOST)
	return nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	});
}

const transport = setup();
const emailContents = {
    from,
    to: process.env.DRIVER_EMAIL_1,
    subject: "",
    text: ``
};

transport.sendMail(emailContents);

