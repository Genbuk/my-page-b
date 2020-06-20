/**
 * http://www.lawebdelprogramador.com
 */
$(document).ready(function(){
    // Funcion que se ejecuta al hacer click sobre una imagen
    $(".main .trabajos .contenedor .contenedor-trabajos .trabajos .thumb img").click(function(){
        // Posicionamos las capas
        $('#background').css('height',$(document).height());
        $('#preview').css('top',(($(window).height()/2) - ($('#preview').height()/2) + $(document).scrollTop()));
        $('#preview').css('left', ($(document).width()/2) - ($('#preview').width()/2));
        // Cargamos la imagen en la capa grande
        $('#content').html("<img src='"+$(this).attr("src")+"' width= 500px>");
        // Mostramos las capas
        $('#preview').fadeIn();
        $('#background').fadeIn();
    });

    // Cerramos las capas al pulsar sobre el fondo
    $("#background").click(function(){
        $('#background').fadeOut();
        $('#preview').fadeOut();
    });
    // Cerramos las capas al pulsar sobre la cruz
    $("#close").click(function(){
        $('#background').fadeOut();
        $('#preview').fadeOut();
    });
});
