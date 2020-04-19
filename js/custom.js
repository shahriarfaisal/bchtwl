$(function () {


    "use strict";
    
    
//comment-slider

    $('.comment-slider').slick({

        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        button: false,
        arrows: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: 0,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    }

  ]

    });

    


});    