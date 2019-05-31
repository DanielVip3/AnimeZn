const constants = require('../../constants.js');
let MAL = constants.MAL;
const cache = require('../../cache.js');
let redisClient = cache.redisClient;

async function handleRoute(req, res) {
    if (!req.query.title) {
        res.status("400").json(
            {
                error: true,
                type: "error",
                message: "You should pass the 'title' parameter to this request, in order to use it. The title should be a string."
            }
        );
        return;
    }

    await redisClient.get("getAnimeByName."+req.query.title, async function(err, val) {
        if (err || !val) {
            let anime = await getAnimeByName(req.query.title);
            // 5 ore
            await redisClient.set("getAnimeByName."+req.query.title, JSON.stringify(anime), 'EX', 60*5);
            res.json(anime);
        } else {
            res.json(JSON.parse(val));
        }
    });
}

async function getAnimeByName(title) {
    return await MAL.search('anime', title, null);
}

module.exports = {
    handleRoute,
    getAnimeByName,
};