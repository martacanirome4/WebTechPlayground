$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgreen");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
    });

$("p").click(function(e){
    console.log(e);
});

$("#boton1").click(function(){
    $("#banner").slideToggle(2000, function(){
        //function es callback, se ejecuta cuando termina el efecto
        console.log("Terminó el efecto");
    }
    );
});

$("#boton2").click(function(){
    window.location.href = "https://www.google.com/";
});

let txt1 = "<h1>Binvenido</h1>";
let txt2 = "<h1>a cookielandia</h1>";
$("#boton1").click(function(){

    $("body").append(txt1, txt2);

});


