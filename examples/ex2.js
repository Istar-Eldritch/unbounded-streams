'use strict';

const fs = require('fs');

const fws = fs.createWriteStream('./smallfile');
const filesize = 1024 * 1024 / 4;

function write(stream, requiredSize) {
  let ch = Math.floor(Math.random() * 25) + 97;
  
  stream.write(String.fromCharCode(ch), 'utf-8', () => {
   if (stream.bytesWritten < requiredSize) {
    write(stream, requiredSize);
   }
   else {
    stream.end();
   }
  });
}

write(fws, filesize);
