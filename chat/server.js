module.exports.setSocketIo = function(io){

  io.sockets.on('connection', function(socket){

    setUser(socket);

    socket.on('fc', function(data){
      socket.broadcast.emit('tc', data);
      socket.emit('tc', data);
    });
    console.log(userList);
  });
};

var userList = [];

function setUser(socket){
  userList[socket.id] = 'user';
}
