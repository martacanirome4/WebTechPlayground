let suma = 0;
function callback(val=20){
    suma += val;
    console.log("Dentro del callback:", suma);
}
console.log(suma);
[1,2,3,4].forEach(callback);
console.log(suma);
