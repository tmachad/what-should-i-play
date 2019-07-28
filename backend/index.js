const express = require('express');
const app = express();
const config = require('./config.json');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

const api = require('./api');

app.use('/api', api);

const port = config.nodePort;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});