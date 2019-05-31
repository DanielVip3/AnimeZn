const constants = require('../../constants.js');
let app = constants.app;

app.post('/admin/isAdmin', function(req, res) {
    if (req.body.password === constants.adminPass) {
        res.send(true);
    } else {
        res.send(false);
    }
});

module.exports = {};