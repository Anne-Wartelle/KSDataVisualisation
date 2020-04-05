"use strict";

const MongoClient = require('mongodb').MongoClient;
const database = 'mongodb://127.0.0.1/27017';

// Use connect method to connect to the Server
const client = MongoClient.connect(database, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then( () => {
    console.log("Connection to database established.");
}).catch( err => {
    console.log("Database error: " + err.message);
});

const app = require("./app");
const server = app.listen(8080, () => {
    console.log('Express is running on port 8080');
});