const io = require("socket.io")();
const socketapi = {
  io: io,
};

/* 

io - server - all user
socket - single user
emit - send krna
on - receive krna

*/

/* 

io.emit - sabhi user ko message send karo
socket.emit- jisne message senk kiya tha sirf usse message send karo
socket.broadcast.emit- jisne message send kiya tha uske alawa sabko message send karo

*/

io.on("connection", function (socket) {
  socket.on("message", function (message) {
    // console.log("Received a message" + message);

    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

module.exports = socketapi;
