/*global, module */
/*jshint globalstrict:true*/
'use strict';

// sockets.js
var socketio = require('socket.io');
exports.socketServer = function (app, server) {
  var io = socketio.listen(server);

  io.sockets.on('connection', function (socket) {
    console.log('a user connected');
  });
};
