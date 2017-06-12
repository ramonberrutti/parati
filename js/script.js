$(document).ready(function() 
{
    var inicialValorRegistrar = $('#Usuario').text();

    $("#pagina-principal").show();
    $( '#pagina-usuario').hide();
    $( '#pagina-protagonista').hide();
    $( '#pagina-fotoCarousel' ).hide();

    $( '#megustan').show();
    $( '#notasparami').hide();
    $( '#compras' ).hide();

    $( '#clickModa' ).click( function() 
    {
        if($('#Usuario').text() == inicialValorRegistrar )
            return;

        $( '#pagina-usuario').hide();
        $( "#pagina-principal").hide();
        $( '#pagina-fotoCarousel' ).hide();
        $( '#pagina-protagonista').show();

    });

    $( '#clickImgCarousel' ).css( 'cursor', 'pointer' );

    $( '#clickImgCarousel' ).click( function() 
    {
        if($('#Usuario').text() == inicialValorRegistrar )
            return;

        $( '#pagina-usuario').hide();
        $("#pagina-principal").hide();
        $( '#pagina-protagonista').hide();
        $( '#pagina-fotoCarousel' ).show();

    });


    $( "#logo-img" ).click( function() 
    {
        $( '#pagina-usuario').hide();
        $( '#pagina-protagonista').hide();
        $("#pagina-principal").show();

    });

    $( ".registrar" ).click( function() 
    {
        if($('#Usuario').text() == inicialValorRegistrar )
        {
            console.log('Apreto en Registrar');
            $("#myModal").modal('show');
        }
        else
        {
            console.log('Apreto en Usuario');
            $("#pagina-principal").fadeOut( 1000, function() 
            {
                console.log('Carrusel Oculto');
                $( '#pagina-usuario').fadeIn(600);
            });
        }

    });
    $('.registrar').css( 'cursor', 'pointer' );

    $( ".registrarButton" ).click( function()
    {
        $("#myModal").modal('hide');
        console.log('Usuario Registrado');
        $('#Usuario').text( $('#nombreField').val().toUpperCase() );
        $('#perfilUsuario').text( $('#nombreField').val() );

    });


    $( "#clickMeGustan" ).click( function() 
    {
        $( '#megustan').show();
        $( '#notasparami').hide();
        $( '#compras' ).hide();

        $( '#clickMeGustan' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickNotasParaMi' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickCompras' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });

    $( "#clickNotasParaMi" ).click( function() 
    {
        $( '#notasparami').show();
        $( '#megustan').hide();
        $( '#compras' ).hide();

        $( '#clickNotasParaMi' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickMeGustan' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickCompras' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });

    $( "#clickCompras" ).click( function() 
    {
        $( '#compras' ).show();
        $( '#megustan').hide();
        $( '#notasparami').hide();

        $( '#clickCompras' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickMeGustan' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickNotasParaMi' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });
    
    
});