'use strict';

const fs = require('fs');

const fws = fs.createWriteStream('./bigfile');
const filesize = 1024 * 1024 * 1024;
const maxBuffer = 1024;

function write(stream, bufferSize, acc, next) {
  let ch = Math.floor(Math.random() * 25) + 97;  
  let buff = new Buffer(String.fromCharCode(ch));
  let written = stream.write(buff);
  if (!written || acc >= bufferSize) {

    process.nextTick(() => {
      stream.uncork();
      setTimeout(() => {
        next(stream, bufferSize);
      },0);
    });

  }
  else {
    write(stream, bufferSize, acc + buff.length, next);
  }
}

function corkedWrite(requiredSize) {
  return function(stream, bufferSize) {
    if (stream.bytesWritten < requiredSize) {
      stream.cork();
      write(stream, bufferSize, 0, corkedWrite(requiredSize));
    }
    else {
      stream.end();
    }
  }
}

corkedWrite(filesize)(fws, maxBuffer);

