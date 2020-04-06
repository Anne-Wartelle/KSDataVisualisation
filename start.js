"use strict";

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
        console.log("Connection to database established");
    })
    .on('error', (err) => {
        console.log("Connection error: "+ err.message);
    });

require("./models/KickStarter");
const app = require("./app");
const server = app.listen(8080, () => {
    console.log('Express is running on port 8080');
});