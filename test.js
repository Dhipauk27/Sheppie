// const wbm = require('wbm');

// wbm.start().then(async () => {
//     const phones = ['+15109941184'];
//     const message = 'ayo??';
//     await wbm.send(phones, message);
//     await wbm.end();
// }).catch(err => console.log(err));

//dont join whatsapp beta, just scan qr code in linked device
const fs = require('fs');
const { Client } = require('whatsapp-web.js');
const Drivers = require('./models/Drivers');

// Settings.findOne({}).then(res => {
//     console.log('settings', res)
// })

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({ 
    puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']}, 
    session: sessionData 
});

// Save session values to the file upon successful auth
client.on('authenticated', async (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

const qrcode = require('qrcode-terminal');

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
});

client.initialize().catch((err)=>{
    console.log('error in client initialisation', err)
});