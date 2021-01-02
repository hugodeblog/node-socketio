import http from 'http';
import fs from 'fs';
import { Server } from 'socket.io';

const server = http.createServer();

var counter = 0;

server.on('request', (req, res) => {
  fs.readFile('index.html', 'utf-8', (error, data) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
  });
});

// socket.io通信のため
const io = new Server(server);

io.of('/home').on('connect', socket => {
  console.log('socket connection: server');
  console.log('connected by:', socket.id);
  socket.emit('fistlove', {num: counter}, function (data) {
    console.log(`response by client: ${data}`);
  });

  socket.on('submitlove', data => {
    console.log('submitlove called', data);
    console.log(`${data.message} by ${socket.id}`);
    counter++;
    io.of('/home').emit('updatelove', {num: counter});
  });
});

server.listen(3000);
