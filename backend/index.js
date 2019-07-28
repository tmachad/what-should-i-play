const express = require('express');
const app = express();

const api = require('./api');

app.use('/api', api);

app.listen(8000, () => {
    console.log('Server started!')
});