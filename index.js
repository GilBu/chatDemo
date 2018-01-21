var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(user, msg){
    io.emit('chat message',user , msg);
  });
  conMsg = ('a user has connected');
  io.emit('connect message', conMsg);
  socket.on('disconnect', function(conMsg){
    conMsg = ('a user has disconnected');
    io.emit('connect message', conMsg);
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
