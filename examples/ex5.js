'use strict';

const http = require('http');
const giphy = require('./giphy');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'image/gif'})
	giphy('cat').then(cat => cat.pipe(res));
});

server.listen(3000)



