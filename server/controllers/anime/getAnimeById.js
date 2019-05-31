const constants = require('../../constants.js');
let MAL = constants.MAL;
const cache = require('../../cache.js');
let redisClient = cache.redisClient;

async function handleRoute(req, res) {
    if (!req.query.id || !Number.isInteger(parseInt(req.query.id)) || Number.isNaN(parseInt(req.query.id))) {
        res.status("400").json(
            {
                error: true,
                type: "error",
                message: "You should pass the 'id' parameter to this request, in order to use it. The id should be an int."
            }
        );
        return;
    }

    await redisClient.get("getAnimeById."+req.query.id, async function(err, val) {
        if (err || !val) {
            let anime = await getAnimeById(req.query.id);
            // 5 ore
            await redisClient.set("getAnimeById."+req.query.id, JSON.stringify(anime), 'EX', 60*5);
            res.json(anime);
        } else {
            res.json(JSON.parse(val));
        }
    });
}

async function getAnimeById(id) {
    return await MAL.findAnime(id, '', null);
}

module.exports = {
    handleRoute,
    getAnimeById,
};