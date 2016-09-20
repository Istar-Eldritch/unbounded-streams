'use strict';

const fs = require('fs')

const frs = fs.createReadStream('/dev/urandom');
const fws = fs.createWriteStream('/dev/null');

frs.pipe(fws);
