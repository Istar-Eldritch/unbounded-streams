'use strict';

const giphy = require('./giphy');

giphy(process.argv[2]).then(gifStream => 
	gifStream.on('data', (data) => {
		process.stdout.write(data);
	})
);
