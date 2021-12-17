const fs = require('fs');
const { Client } = require('whatsapp-web.js');

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    console.log('inside authenticated')
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

client.on('ready', () => {
    console.log('inside ready')
    // Number where you want to send the message.
    const number = '+15108614144';
    const chatId = number.substring(1) + "@c.us";
    const message = 'testing';

    // Sending message.
    client.sendMessage(chatId, message);
    console.log('message sent to', number)
});

client.initialize();