const header = {
    controller: function () {
        $(window).scroll(function () {
            $('.main .blue-wrap *,.main .padding *').animate({opacity:1},1000)
            if (document.body.scrollTop > $('.main').height()+100) {
                $('header').addClass('active');
                $('header .phone').fadeOut('fast', function () {
                    $('header .menu').fadeIn('fast');
                })
            } else {
                $('header').removeClass('active');
                $('header .menu').fadeOut('fast', function () {
                    $('header .phone').fadeIn('fast');
                })
            }
        })
    }
};
$('.carousel').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                  arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 5000
            }
        }
    ]
});
$(window).scroll(function() {
    if ($(document).scrollTop() > 900) {
        $('.up-button').fadeIn();
    } else {
        $('.up-button').fadeOut();
    }
})
$('.up-button').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 1500);
})
let status = 0,
    can = 0;
$('.up-button').mouseenter(function() {
    $(this).css('bottom', $(this).css('bottom'));
    can = 1;
})
$('.up-button').mouseleave(function() {
    can = 0;
})
setInterval(function() {
    if (can == 0) {
        if (status == 0) {
            $('.up-button').animate({
                bottom: '20'
            }, 1000);
            status = 1;
        } else {
            $('.up-button').animate({
                bottom: '40'
            }, 1000);
            status = 0;
        }
    }
}, 1000)
header.controller();
