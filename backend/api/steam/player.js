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
        request.get(url, {json: true}, (err, response, body) => {
            if (err) {
                throw err;
            } else if (!body || !body.response || !body.response.games) {
                console.log('something is undefined, possibly rate limited? sending empty games array');
                console.log(body);
                res.send([]);
            } else {
                let games = [];
                for (const game of body.response.games) {
                    games.push({
                        iconUrl: game.img_icon_url ? `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg` : null,
                        title: game.name,
                        id: game.appid
                    });
                }
                res.send(games);
            }
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;