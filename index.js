var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var Promise = require('bluebird');
const http = require('http');

var users = require('./routes/users');
var requests = require('./routes/requests');
var filterRequests = require('./routes/filter_requests')
var leafletRequest = require('./routes/leaflet_request')
// var twilio = require('./routes/twilio');
var settings = require('./routes/settings')
var upload = require('./routes/upload');
var testimony = require('./routes/testimony')

// const WebSocket = require('ws');
console.log('inside index.js server')
dotenv.config();

const app = express();

global.app = app;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

//db connection
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(express.static(__dirname + '/public'));

app.use("/users", users);
app.use("/request", requests);
// app.use("/twilio", twilio);
app.use("/filter", filterRequests);
app.use("/settings_route", settings);
app.use("/leaflet_request", leafletRequest);
app.use("/upload", upload);
app.use("/testimony", testimony);

app.use(express.static(path.join(__dirname, "client", "build")));

app.locals.appExpress = app;

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client","build","index.html"));
});

const port = process.env.PORT || 5000;

var server = http.createServer(app);
server.listen(port);
console.log('Running in port', port)

//app.use(express.static(__dirname + '/public'));

// const wss = new WebSocket.Server({ server });

// wss.on('connection', function connection(ws) {
//   console.log('ws connection succeeded')
//   ws.on('message', function incoming(data) {
//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   });
// });