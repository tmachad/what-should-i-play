const express = require('express');
const app = express();
const config = require('./config.json');

const api = require('./api');

app.use('/api', api);

const port = config.nodePort;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});