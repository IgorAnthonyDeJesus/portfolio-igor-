function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        },1000)
    });
}
ativaScrollSuave('a[href*=sobre-id]');
ativaScrollSuave('a[href*=cursos-id]');
ativaScrollSuave('a[href*=formaçao-id]');
ativaScrollSuave('a[href*=competencia-id]');
ativaScrollSuave('a[href*=habilidades-id]');
ativaScrollSuave('a[href*=contato-id]');
