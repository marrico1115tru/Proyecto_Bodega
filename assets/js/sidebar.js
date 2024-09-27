$(document).ready(function () {
    // Seleccionar todos los enlaces con la clase nav-link
    $('.nav-link').on('click', function () {
        // Remover la clase active de todos los nav-links
        $('.nav-link').removeClass('active');

        // Agregar la clase active al enlace clicado
        $(this).addClass('active');
    });

    //$('#sidebar').load('../../components/sidebar.html');
});