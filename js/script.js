$(document).ready(function() 
{
    $( '#pagina-usuario').hide();
    $( '#megustan').show();
    $( '#notasparami').hide();
    $( '#compras' ).hide();

    $( '#clickModa' ).click( function() 
    {
        

    });


    $( "#logo-img" ).click( function() 
    {
        $( '#pagina-usuario').hide();
        $( '#pagina-usuario').hide();
        $("#pagina-principal").show();

    });


    var inicialValorRegistrar = $('#Usuario').text();
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