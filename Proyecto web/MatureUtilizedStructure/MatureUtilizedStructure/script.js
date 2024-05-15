$(document).ready(function(){

    $("#carouselExample2").hide();
    $("#carouselExample3").hide();
    $("#descripcion2").hi
    
    $(".numeros div").click(function(){
        var index = parseInt($(this).data('carousel')); // Obtener el índice del carrusel basado en el atributo data-carousel del número
        $("#carouselExample").carousel(index); // Mover el carrusel al índice seleccionado
    });

    $("#uno").click(function(){

        $("#descripcion1").fadeIn();
        $("#carouselExample1").fadeIn();
        $("#carouselExample2").fadeOut();
        $("#carouselExample3").fadeOut();

    })


    $("#dos").click(function(){

        $("#descripcion1").fadeOut();
        $("#carouselExample1").fadeOut();
        $("#carouselExample2").fadeIn();
        $("#carouselExample3").hide();
        $("#descripcion2").fadeIn();
    })

    $("#tres").click(function(){
        $("#carouselExample3").fadeIn();
        $("#carouselExample1").hide();
        $("#carouselExample2").hide();
        $("#descripcion1").hide();
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


    //Animaciones para trabaja con nosotros y patrocinadores

    $('#trabajacn').mouseenter(function(){
        $(this).css('background-color', 'red');
    });
    
    $('#trabajacn').mouseleave(function(){
        $(this).css('background-color', 'blue');
    });

    $('#patrocinador').mouseenter(function(){
        $(this).css('background-color', 'red');
    });

    $('#patrocinador').mouseleave(function(){
        $(this).css('background-color', 'blue');
    })

    // fin de estas animaciones



    $('.texto').mouseenter(function(){
        $(this).css('background-color', 'red');
    });
    
    $('.texto').mouseleave(function(){
        $(this).css('background-color', 'white');
    });


});
