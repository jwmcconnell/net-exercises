const { createConnection } = require('net');

const client = createConnection(7890, 'localhost', () => {
  console.log('connected');
  client.write('hello');
});

client.on('data', chunk => {
  console.log(chunk.toString());
  if(chunk.toString() === 'I will echo')
    setInterval(() => {
      client.write(new Date().toString());
    }, 1000);
});
