//http_server.js

/* Servidor para procesar mensajes POST */

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  // Event listener for the 'data' event, triggered when data is received from the client
  req.on('data', (d) => {
    process.stdout.write(d);
  });

  // Event listener for the 'end' event, triggered when the entire request has been received
  req.on('end', () => {
    console.log('\nNo more data');
  });

  // Setting the response status code to 200
  res.statusCode = 200;

  // Setting the response headers
  res.setHeader('Content-Type', 'text/html');

  // Sending the response body with a simple HTML message
  res.end('<h1>Hello, World!</h1>');
});

// Server listening on the specified port
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
