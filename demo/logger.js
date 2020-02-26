'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3001, 'localhost', () => { });

client.on('data', payload => {
  let event = JSON.parse(payload.toString());
  // if(event.eventName === "delete"){

  // }
  switch (event.eventName) {
    case 'fetch':
      handleFetch(event.payload);
      break;
    case 'update':
      handleUpdate(event.payload);
      break;
    case 'delete':
      handleDelete(event.payload);
      break;
    case 'create':
      handleCreate(event.payload);
      break;
    default:
      break;
  }
});

function handleFetch(payload) {}

function handleCreate(payload){
  console.log('Record got added', payload);
}

function handleUpdate(payload){
  console.log('Record got updated', payload);
}

function handleDelete(payload){
  console.log('Record got Deleted', payload);
}

client.on('close', function () {
  console.log('Connection closed');
});
