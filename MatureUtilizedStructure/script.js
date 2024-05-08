$(document).ready(function(){

    $("#carouselExample2").hide();
    $("#carouselExample3").hide();
    
    $(".numeros div").click(function(){
        var index = parseInt($(this).data('carousel')); // Obtener el índice del carrusel basado en el atributo data-carousel del número
        $("#carouselExample").carousel(index); // Mover el carrusel al índice seleccionado
    });

    $("#uno").click(function(){

        $("#descripcion").fadeIn();
        $("#carouselExample1").fadeIn();
        $("#carouselExample2").fadeOut();
        $("#carouselExample3").fadeOut();

    })


    $("#dos").click(function(){

        $("#descripcion").fadeOut();
        $("#carouselExample1").fadeOut();
        $("#carouselExample2").fadeIn();
        $("#carouselExample3").hide();

    })

    $("#tres").click(function(){
        $("#carouselExample3").fadeIn();
        $("#carouselExample1").hide();
        $("#carouselExample2").hide();
        $("#descripcion").hide();
    })

    $('#mecanicos').mouseenter(function(){
        $(this).css('background-color', 'red');
    });
    
    $('#mecanicos').mouseleave(function(){
        $(this).css('background-color', 'blue');
    });

    $('#contactanos').mouseenter(function(){
        $(this).css('background-color', 'red');
    });

    $('#contactanos').mouseleave(function(){
        $(this).css('background-color', 'blue');
    })


    $('.texto').mouseenter(function(){
        $(this).css('background-color', 'red');
    });
    
    $('.texto').mouseleave(function(){
        $(this).css('background-color', 'white');
    });

    
});
