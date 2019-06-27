const { createServer } = require('net');

const server = createServer(sock => {
  console.log('client connected');
  sock.write('I will echo');

  sock.on('data', data => {
    sock.write(data);
  });
});

server.listen(7890);
