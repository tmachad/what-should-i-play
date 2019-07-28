const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const parseUrlEncoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();

router.route('/').get(parseUrlEncoded, parseJSON, (req, res) => {
    res.send({
        message: 'Hello world!'
    });
});

module.exports = router;