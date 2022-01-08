const Redis = require('ioredis');
module.exports = {
    createClient: function (type) {
        return new Redis('redis://127.0.0.1:6379');
    }
};
