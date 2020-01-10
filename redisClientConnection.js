const redis = require('redis');
const config = require('./config');

const client = redis.createClient(config.redis.port, config.redis.host, {no_ready_check: true});

client.auth(config.redis.password);

client.on('error', error => console.error('Error Connecting to the Redis Cluster', error));

client.on('connect', () => {
    console.log('Successfully connected to the Redis cluster!');
  });


module.exports = client;




  