$(window).scroll(function() {

    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

    $(".fade").each(function() {
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
    })
})