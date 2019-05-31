const constants = require('./constants.js');
const app = constants.app;
const apiRateLimit = constants.apiRateLimit;

app.use('/api', apiRateLimit, require('./routes/index.js'));

/* Errori */
require('./routes/errors/404.js');