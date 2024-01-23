// promise-based (even better) solution

const {readFile} = require('fs').promises; // gives us a function that returns a promised when called

async function hello() {
    const file = await readFile('./hello.txt', 'utf8');
}