'use strict';

const fs = require('fs');

fs.readFile('/dev/urandom', (err, data) => {
  fs.writeFile('/dev/null', data);
});
