var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');

// connect to server
client.connect('8124', 'localhost', function () {
   console.log('connected to server');
   console.log('Enter you nickname');
});

// send data
process.stdin.on('data', function (data) {
   client.write(data);
});

// show message from server
client.on('data', function (data) {
   console.log(data);
});

client.on('close', function () {
   console.log('connection is closed');
});