const constants = require('../../constants.js');
let MAL = constants.MAL;
const cache = require('../../cache.js');
let redisClient = cache.redisClient;

async function handleRoute(req, res) {
    if (!req.query.username) {
        res.status("400").json(
            {
                error: true,
                type: "error",
                message: "You should pass the 'username' parameter to this request, in order to use it. The username should exist and should be a string."
            }
        );
        return;
    }

    await redisClient.get("getAnimeList."+req.query.username, async function(err, val) {
        if (err || !val) {
            let animelist = await getAnimeList(req.query.username);
            // 4 ore
            await redisClient.set("getAnimeList."+req.query.username, JSON.stringify(animelist), 'EX', 60*4);
            res.json(animelist);
        } else {
            res.json(JSON.parse(val));
        }
    });
}

async function getAnimeList(username) {
    return await MAL.findUser(username, 'animelist', null);
}

module.exports = {
    handleRoute,
    getAnimeList,
};