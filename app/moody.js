var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.emit('CHAT', { message: 'welcome to the chat', type: "MOODY" });

  socket.on('CHAT', function(msg){
    io.emit('CHAT', { message: msg, type: "CHAT" });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
