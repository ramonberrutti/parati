$(document).ready(function() 
{
    $( '#pagina-usuario').hide();
    $( '#megustan').hide();
    $( '#notasparami').hide();
    $( '#compras' ).show();

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
        $('#Usuario').html( $('#nombreField').val() );
        $('#perfilUsuario').html( $('#nombreField').val() );

    });
    
    
});