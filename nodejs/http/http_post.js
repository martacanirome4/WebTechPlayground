//http_post.js

// Cliente para enviar un mensaje POST

/* making a simple HTTP POST request to the '/todos' endpoint on a local server running on 'localhost:3000'
It sends a message ('Mensaje') in the request body and logs the response status code and data to the console. */

const http = require('http');

const data = "Mensaje";

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'text/html',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
