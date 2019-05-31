// Lista di tutte le routes

const constants = require('../constants.js');

require('./anime/getAnimeById.js');
require('./anime/getAnimeByName.js');

require('./animelist/getAnimeList.js');

require('./admin/isAdmin.js');
require('./admin/isInMaintenance.js');
require('./admin/flushCache.js');

module.exports = constants.router;