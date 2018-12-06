const express = require('express');

const server = express();

server.use(express.json());

// sanity check
server.get('/', (req, res) => {
    res.status(200).jsonp({ Api: 'up' });
});

const port = process.eventNames.PORT || 9000;
server.listen(port, () => console.log(`\n** server up on port ${port}  **\n`));
