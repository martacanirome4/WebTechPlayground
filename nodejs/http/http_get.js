//http_get.js

/* script that uses the https module to make a simple GET request to the Google homepage */

const https = require('https');

const options = {
    hostname: 'www.google.com',
    port: 443,
    path: '/',
    method: 'GET'
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {console.error(error);})
req.end();