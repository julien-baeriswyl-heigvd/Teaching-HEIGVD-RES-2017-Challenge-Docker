var dgram = require('dgram');
var client = dgram.createSocket("udp4");

var address = process.argv[2];
var port = process.argv[3];

client.bind(port, function (err, msg) {
    client.addMembership(address);
});


client.on('message', function (msg, socket) {
	console.log(socket + " : " + msg);
});