const net = require('net');

const client = new net.Socket();

client.connect(3000, 'localhost', () => { });

const events = require('./events.js');

client.on('save', (payload) => {
  console.log('A file was read and re-written', payload);
});

client.on('Error', (payload) => {
  console.error('error', payload);
});
