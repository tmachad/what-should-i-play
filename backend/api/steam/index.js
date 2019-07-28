const express = require('express');
const steam = express.Router();

const test = require('./test');

steam.use('/test', test);

module.exports = steam;