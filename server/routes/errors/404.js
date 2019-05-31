const constants = require('../../constants.js');
let app = constants.app;

app.get('*', function(req, res){
    res.status(404).send('404 page not found!');
});

module.exports = {};