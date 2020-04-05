"use strict";

let serverUrl = "http://127.0.0.1";
let serverPort = 8080;
let server = io.connect(serverUrl + ":" + serverPort);

server.on('KickStarter', function (data) {
    console.log(data[0]);
});
let after = date.getTime()

server.emit('KickStarter', "Bonjour");