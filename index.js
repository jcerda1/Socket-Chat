var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on('connection', socket => {
  console.log('a user is connected');
  socket.on('disconnect', () => {
      console.log('user has disconnected');
  });
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
  });
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
    console.log('listining on port 3000');
});