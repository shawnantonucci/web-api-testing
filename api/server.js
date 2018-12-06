const express = require('express');

const server = express();

server.use(express.json());

// sanity check
server.get('/', (req, res) => {
    res.status(200).jsonp({ Api: 'up' });
});

const port = process.env.PORT || 9000;

module.exports = server;