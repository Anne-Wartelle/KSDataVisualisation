"use strict";

const express = require("express");
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('public'));

module.exports = app;

// let fs = require('fs');
// let querystring = require('querystring');

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// let url = require('url');
// const urll = 'mongodb://127.0.0.1/27017';
// // Database Name
// const dbName = 'KSData';

// // Create a new MongoClient
// const client = new MongoClient(urll);
// // Use connect method to connect to the Server
// client.connect(function(err) {
//     assert.equal(err, null);
//     console.log("Connected correctly to server");
// });
  
// const findDocuments = function(db, col, callback) {
//     // Get the documents collection
//     const collection = db.collection(col);
//     // Find some documents
//         collection.find({}).toArray(function(err, docs) {
//         assert.equal(err, null);
//         callback(docs);
//     });
// };
    
// app.get('/*', function(req, res) {
//     let page = url.parse(req.url).pathname;
//     let params = querystring.parse(url.parse(req.url).query);
//     fs.readFile(__dirname + '/html/' + page,
//             function(err, data) {
//                 if (err) {
//                     res.writeHead(500);
//                     return res.end('Error loading ' + page);
//                 }
//                 console.log('sending page ' + page);
//                 res.end(data);
//             });
//     // sending response OK
// });

// let port = 8080;
// console.log("listening to " + port);
// let io = require('socket.io').listen(app.listen(port), {log: true});
// // when the client is ready
// io.sockets.on('connection', function(socket) {
//     socket.on('KickStarter', function (docs) {
//         // Use connect method to connect to the Server
//         const db = client.db(dbName);
//         findDocuments(db, 'KickStarter', function (docs) {
//             socket.emit('KickStarter', docs);
//         });
//     });
// })

