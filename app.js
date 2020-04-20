const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const routes = require('./routes/index');
const db = require('./config/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.connectDB();
app.use('/', routes);

module.exports = app