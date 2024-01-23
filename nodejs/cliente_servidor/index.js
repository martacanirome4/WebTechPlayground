// index.js

/* 
1º: se ejecutó 'npm init -y' --> se genera package.json (metadata del proyecto + dependencias)
2º: 'npm install express' --> se genera package-lock.json + fichero node_modules (no tocar) (y se añade express a package.json) */

const {readFile} = require('fs').promises;

const express = require('express');
const app = express();

/* get method: client requests data from the server without trying to modify anything on the server */
app.get('/foo/bar', (request, response) => {
    // Handle the '/foo/bar' route here
    response.send('Hello from /foo/bar');
});

/* callback funtion: request = user incoming data, response = my outgoing data */
app.get('/', async (request, response) => {
    try {
        /* way of sending html from the server to the client */
        const html = await readFile('./home.html', 'utf8');
        response.send(html);
    } catch (err) {
        response.status(500).send('Sorry, internal server error');
    }
});


/* listening to incoming events */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('App available on http://localhost:3000'));