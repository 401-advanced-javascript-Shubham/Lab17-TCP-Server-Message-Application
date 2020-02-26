'use strict';

const net = require('net');

const port = process.env.PORT || 3000;
const server = net.createServer();

server.listen(port, () => console.log(`Server up on ${port}`) );


let socketPool = {};

server.on('connection', (socket) => {

  let id = `Socket-${Math.random()}`;
  socketPool[id] = socket;
 
  socket.on('data', (buffer) => {
    let rawData =  buffer.toString();
    let jsonObject =  JSON.parse(rawData);
    console.log(jsonObject);
    broadcast(rawData);
  });

  socket.on('error', handleError);

  socket.on('end', () => disconnect(id));
  
});

function handleError(err) {
  console.log('Error',err);
}

function disconnect(id) {
  console.log('Goodbye', id);
  delete socketPool[id];
}

function broadcast(message) {
  for(let socket in socketPool){
    socketPool[socket].write(message);
  }

}


