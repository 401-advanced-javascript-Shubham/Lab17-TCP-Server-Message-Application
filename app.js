'use strict';

const fs = require('fs');
const net = require('net');
const util = require('util');
const client = new net.Socket();

const events =  require('./events.js')
require('./logger.js')

client.connect(3000, 'localhost', () => {});

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);

/*fs.writeFile(file, (err,data) => {
  write(file) => {})
  .then(data => {})
  .catch(err => {})
})

*/

const upperCaseContents =(buffer) =>{
  return Buffer.from(buffer.toString().trim().toUpperCase());
}

const saveFile = (buffer) => {
  return write(file,buffer);
}

const ok = () => {
  events.emit('save',file);
}

const err =(error) => {
  events.emit('Error', error)
}

const alertFile = (file) => {
  read(file)
  .then(upperCaseContents)
  .then(saveFile)
  .then(ok)
  .catch(err)
}

let file = process.argv.slice(2).shift();
alterFile(file);
