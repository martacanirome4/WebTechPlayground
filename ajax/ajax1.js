window.addEventListener("load", function() {
    document.getElementById("boton").addEventListener("click", function(){
        document.getElementById("mensaje").innerHTML = "¡Hola!";
        setTimeout(function(){
            document.getElementById("mensaje").innerHTML = "¡Adiós!";
            setTimeout(function(){
                document.getElementById("mensaje").innerHTML = "";
            }, 1000);
        }, 1000);
    });
});