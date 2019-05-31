const constants = require('../../constants.js');
let router = constants.router;

router.get("/anime/getAnimeByName", require("./../../controllers/anime/getAnimeByName.js").handleRoute);