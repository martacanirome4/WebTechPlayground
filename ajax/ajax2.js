window.addEventListener("load", init);
function init(){document.getElementById("boton").addEventListener("click", saludar);}
function saludar(){
    document.getElementById("mensaje").innerHTML = "¡Hola!";
    setTimeout(despedirse, 1000);
}
function despedirse(){
    document.getElementById("mensaje").innerHTML = "¡Adiós!";
    setTimeout(borrarMensaje, 1000);
}
function borrarMensaje(){document.getElementById("mensaje").innerHTML = "";}