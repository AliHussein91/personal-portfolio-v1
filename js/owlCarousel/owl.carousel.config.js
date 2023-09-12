$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 1,
            },
            768: {
                items: 2,
                dotsEach: 2,
            },
            992: {
                items: 3,
                dotsEach: 3,
            },
        },
    });
});
