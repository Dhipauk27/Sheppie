var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var Promise = require("bluebird");
var requestScheduler = require("./utils/scheduler_for_requests");

dotenv.config();
const app = express();
app.use(bodyParser.json());
// oAuth

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

// oAuth
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const port = process.env.PORT || 6000;

app.listen(port);

console.log("App is listening on port " + port);

requestScheduler();
