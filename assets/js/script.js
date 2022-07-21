$(document).ready(function () {
    // Smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //Intervalo de imagenes carrusel
    $('#carousel-inicial').carousel({
        interval: 5000

    });
});