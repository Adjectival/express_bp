// ES6 plz
'use strict';

// our service
const service = require('../server/service');
const http = require('http');

// construct & initiate the web server
const server = http.createServer(service);
// establish HTTP request service on port 1337
server.listen(1337);

// subscribe to listening event of express
server.on('listening', function() {
  console.log(`Iris is listening on ${server.address().port} in ${service.get('env')} mode.`);
});
