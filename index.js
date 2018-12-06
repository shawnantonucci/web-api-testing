const server = require('./api/server.js');

server.listen(server.port, () => console.log(`\n** server up on port ${server.port} **\n`));
