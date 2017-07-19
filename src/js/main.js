const header = {
        status: 0,
        controller: function () {
            $(window).scroll(function () {
                if (document.body.scrollTop > $('header').height()) {
                    if (header.status == 0) {
                        $('header').addClass('closed');
                        header.status = 1;
                    }
                } else {
                    if (header.status == 1) {
                        $('header').removeClass('closed');
                        header.status = 0;
                    }
                }
                if (document.body.scrollTop > $('.main').height()) {
                    $('header').removeClass('closed');
                    $('header').addClass('active');
                    $('header .phone').fadeOut('fast', function () {
                        $('header .menu').fadeIn('fast');
                    })
                } else if (document.body.scrollTop < $('.main').height() && document.body.scrollTop > $('header').height()) {
                    $('header').addClass('closed');
                    $('header').removeClass('active');
                } else {
                    $('header').removeClass('active');
                    $('header .menu').fadeOut('fast', function () {
                        $('header .phone').fadeIn('fast');
                    })
                }
                if (document.body.scrollTop + screen.height / 4 > $('.sale-course').offset().top && screen.width > 865
                    && document.body.scrollTop < $('.sale-course').offset().top + $('.sale-course').height() / 3) {
                    $('.sale-course img:first-child').slideDown('slow', function () {
                        $('.sale-course .left p:first-child').fadeIn();
                        setTimeout(function () {
                            $('.sale-course img:nth-child(2)').slideDown('slow', function () {
                                $('.sale-course .left p:nth-child(2)').fadeIn();
                            });
                        }, 1000);
                    });
                }
                if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                    document.body.scrollTop = $(window).scrollTop() - 1;
                    wow.init();
                    $('.sale-course img:first-child').slideUp('fase', function () {
                        $('.sale-course .left p:first-child').fadeOut();
                        $('.sale-course img:nth-child(2)').slideUp('fast', function () {
                            $('.sale-course .left p:nth-child(2)').fadeOut();
                        });
                    });
                }
            });
            $('.toggle-btn').click(function () {
                $('.list').slideToggle();
            });
            $(".menu a, .btn-orange").click(function (event) {
                event.preventDefault();
                let target = $(this).attr('href'),
                    top = $(target).offset().top;
                $('body,html').animate({scrollTop: top}, Math.abs(top - $(document).scrollTop()) / 1.5);
                if (screen.width < 767) {
                    $('.list').slideUp();
                }
            });
        }
    },
    upButton = {
        status: 0,
        can: 0,
        btn: '.up-button',
        controller: function () {
            $(upButton.btn).click(function () {
                $('html,body').animate({
                    scrollTop: 0
                }, $(document).scrollTop() / 2);
            });
            $(window).scroll(function () {
                if ($(document).scrollTop() > 900) {
                    $('.up-button').fadeIn();
                } else {
                    $('.up-button').fadeOut();
                }
            });
            $(upButton.btn).mouseenter(function () {
                $(this).css('bottom', $(this).css('bottom'));
                upButton.can = 1;
            });
            $(upButton.btn).mouseleave(function () {
                upButton.can = 0;
            });
            setInterval(function () {
                if (upButton.can == 0) {
                    if (upButton.status == 0) {
                        $(upButton.btn).animate({
                            bottom: '20'
                        }, 1000);
                        upButton.status = 1;
                    } else {
                        $(upButton.btn).animate({
                            bottom: '40'
                        }, 1000);
                        upButton.status = 0;
                    }
                }
            }, 1000);
        }
    };
$('.carousel').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 5000
            }
        }
    ]
});
$('.wow').attr('data-wow-duration', '1.5s');
let offset = screen.availHeight * .3;
console.log(offset);
const wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: offset,          // distance to the element when triggering the animation (default is 0)
        mobile: false,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

$(function () {
    setTimeout(function () {
        $('.main .blue-wrap > *').animate({opacity:1},3000);
    },1200);
    header.controller();
    upButton.controller();
});
