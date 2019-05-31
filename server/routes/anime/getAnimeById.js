const constants = require('../../constants.js');
let router = constants.router;

router.get("/anime/getAnimeById", require("./../../controllers/anime/getAnimeById.js").handleRoute);