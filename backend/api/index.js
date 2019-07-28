const express = require('express');
const api = express.Router();

const steam = require('./steam');

api.use('/steam', steam);

module.exports = api;