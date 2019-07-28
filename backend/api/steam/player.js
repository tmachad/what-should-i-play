const express = require('express');
const router = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
const parseUrlEncoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
const request = require('request');
const config = require.main.require('./config.json');

const urlRoot = 'http://api.steampowered.com/IPlayerService';

router.route('/ownedgames').get(parseUrlEncoded, parseJSON, (req, res) => {
    try {
        url = `${urlRoot}/GetOwnedGames/v1?key=${config.steam.apiKey}&format=json&input_json={"steamid":${req.params.steamid},"include_appinfo":true,"include_played_free_games":true}`;
        request(url, (err, response, body) => {
            if (err) {
                throw err;
            } else {
                res.send(body);
            }
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;