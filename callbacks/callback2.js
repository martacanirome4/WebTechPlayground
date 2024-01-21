let suma=0;
function callback(val=20){
    suma+=val;
    console.log("Dentro del callback:", suma);
}
console.log(suma);
// Schedule the callback function to be executed after 100 milliseconds
setTimeout(callback,100);
console.log(suma);