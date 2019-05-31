const constants = require('../../constants.js');
let app = constants.app;
const cache = require('../../cache.js');
let redisClient = cache.redisClient;

app.post('/admin/flushCache', function(req, res) {
    if (req.body.password === constants.adminPass) {

        redisClient.flushall((err, success) => {
            if (err) {
                res.status(403).json(
                    {
                        type: 'error',
                        message: 'You should pass the correct password in order to flush the cache.'
                    }
                );
                throw new Error(err);
            }
        });


        res.status(200).json(
            {
                type: 'success'
            }
        );
    } else {
        res.status(403).json(
            {
                type: 'error',
                message: 'You should pass the correct password in order to flush the cache.'
            }
        );
    }
});

module.exports = {};