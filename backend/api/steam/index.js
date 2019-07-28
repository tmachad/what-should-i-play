const express = require('express');
const steam = express.Router();

const test = require('./test');
const player = require('./player');

steam.use('/test', test);
steam.use('/player/:steamid', player);

module.exports = steam;