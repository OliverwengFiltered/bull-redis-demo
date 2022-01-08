const Queue = require('bull');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const redisOptions = require('./redis');

const testQueue = new Queue('testQueue', redisOptions);
testQueue.process(5, path.join(__dirname, 'test.js'));

const server = http.createServer(app);
server.listen(7777);
server.on('error', error => {
    console.error(error);
});
server.on('listening', () => {
    const addr = server.address();
    const bind =
    typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Bull service server started: listening on ' + bind);
});