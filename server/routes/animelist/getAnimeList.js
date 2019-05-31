const constants = require('../../constants.js');
let router = constants.router;

router.get("/animelist/getAnimeList", require("./../../controllers/animelist/getAnimeList.js").handleRoute);