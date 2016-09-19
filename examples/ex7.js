'use strict';

const fs = require('fs')

fs.createReadStream('./bigfile');

fs.on('data', data => {});
