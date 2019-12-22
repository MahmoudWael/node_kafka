'use strict';
require("dotenv").config();
const server = require('./server/server');

console.log('--- Search Service ---');
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
});

process.on('uncaughtRejection', (err) => {
    console.error('Unhandled Rejection', err)
});

server.start({
    port: process.env.PORT
})
    .then(() => {
        console.log(`Server started successfully, running on port: ${process.env.PORT}.`);
    })
    .catch(err => {
        console.error('Error! ', err);
    });
