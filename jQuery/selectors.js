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

$("#boton2").click(function(){
    $("#banner").hide();
});