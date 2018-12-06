const express = require('express');

const server = express();

server.use(express.json());

// sanity check
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' });
});

server.post('/greet', (req, res) => {
    const { firstName, lastName } = req.body;

    res.status(200).jsonp({ hello: `${firstName} ${lastName}` });
});


const port = process.env.PORT || 9000;

module.exports = server;