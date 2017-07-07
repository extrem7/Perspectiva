const header = {
    controller: function () {
        $(window).scroll(function () {
            if(document.body.scrollTop>50){
                $('header').addClass('active');
                $('header .phone').fadeOut('fast',function(){
                    $('header .menu').fadeIn('fast');
                })
            } else {
                $('header').removeClass('active');
                $('header .menu').fadeOut('fast',function(){
                    $('header .phone').fadeIn('fast');
                })
            }
        })
    }
}
$('.carousel').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"></button>',
    nextArrow:'<button type="button" class="slick-next slick-arrow"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
header.controller();
