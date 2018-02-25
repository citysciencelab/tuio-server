var dotenv = require('dotenv').config();
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Caress = require('caress-server');

// TUIO configuration

var caressOptions = {
  json: true
};
var caress = new Caress(process.env.TUIO_ADDRESS, process.env.TUIO_PORT, caressOptions);

caress.on('tuio', function(msg) {
  io.emit('tuio', msg);
});

// webserver

http.listen(3000, function() {
  console.log('Listening on *:3000');
});
