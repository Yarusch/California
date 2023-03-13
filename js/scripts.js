$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        navText: [ '', ' ' ],
        dots:true,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $('.burger-menu').click(function (event) {
        $('.burger-menu,nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
