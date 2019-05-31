const redis = require("redis");
let redisClient = redis.createClient({
    host: 'redis-12174.c59.eu-west-1-2.ec2.cloud.redislabs.com',
    port: 12174,
    password: 'uBr3RL86XRriplS21XwowYJgOcMQmtVj'
});

module.exports = {
    redisClient,
};