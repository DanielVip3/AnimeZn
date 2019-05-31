const constants = require('../../constants.js');
const fs = require('fs');
const path = require("path");
let app = constants.app;

app.post('/admin/isInMaintenance', function(req, res) {
    const configFile = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../../../config.json")));
    if (configFile['maintenance']) {
        res.send(true);
    } else {
        res.send(false);
    }
});

module.exports = {};