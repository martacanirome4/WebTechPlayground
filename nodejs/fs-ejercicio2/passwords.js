const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const dictionaryFilePath = '/dictionary.txt';

// Función para generar una contraseña aleatoria a partir de palabras del diccionario
function generateRandomPassword(numWords) {
    return fs.readFile(dictionaryFilePath, 'utf-8')
        .then(data => {
            const words = data.split('\n');
            const selectedWords = [];

            for (let i = 0; i < numWords; i++) {
                const randomIndex = Math.floor(Math.random() * words.length);
                selectedWords.push(words[randomIndex]);
            }

            return selectedWords.join('-'); // Puedes ajustar el separador según tus preferencias
        })
        .catch(error => {
            console.error('Error reading dictionary file:', error.message);
            return 'Error generando la contraseña';
        });
}

const server = http.createServer((req, res) => {
    const queryParameters = url.parse(req.url, true).query;
    const numWords = parseInt(queryParameters.numWords) || 3; // Número predeterminado de palabras

    if (req.url === '/') {
        generateRandomPassword(numWords)
            .then(password => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>Contraseña Aleatoria:</h1><p>${password}</p>`);
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log(`Servidor Node.js corriendo en http://${hostname}:${port}/`);
});
