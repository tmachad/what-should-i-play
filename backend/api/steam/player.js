const express = require('express');
const router = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
const parseUrlEncoded = bodyParser.urlencoded({extended: false});
const parseJSON = bodyParser.json();
const request = require('request');
const config = require.main.require('./config.json');

const urlRoot = 'http://api.steampowered.com';

router.route('/ownedgames').get(parseUrlEncoded, parseJSON, (req, res) => {
    try {
        url = `${urlRoot}/IPlayerService/GetOwnedGames/v1?key=${config.steam.apiKey}&format=json&input_json={"steamid":${req.params.steamid},"include_appinfo":true,"include_played_free_games":true}`;
        request.get(url, {json: true}, (err, response, body) => {
            if (err) {
                throw err;
            } else if (!body || !body.response || !body.response.games) {
                console.log('Something is undefined, possibly rate limited? Sending empty games array.');
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

router.get(parseUrlEncoded, parseJSON, (req, res) => {
    try {
        url = `${urlRoot}/ISteamUser/GetPlayerSummaries/v0002?key=${config.steam.apiKey}&steamids=${req.params.steamid}`;
        request.get(url, {json: true}, (err, response, body) => {
            if (err) {
                throw err;
            } else if (!body || !body.response || !body.response.players) {
                console.log('Something is undefined, possibly rate limited? Sending null player.');
                console.log(body);
                res.send(null);
            } else {
                if (body.response.players.length > 0) {
                    const player = body.response.players[0];
                    res.send({
                        steamId: player.steamid,
                        profileName: player.personaname,
                        public: player.communityvisibilitystate === 3,
                        exists: true
                    });
                } else {
                    res.send({
                        exists: false
                    });
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;