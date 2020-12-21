$(window).scroll(function() {
    $('nav').toggleClass('fbw-dark-bg', $(this).scrollTop() > 0);
});
