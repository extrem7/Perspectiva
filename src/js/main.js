const header = {
    controller: function () {
        $(window).scroll(function () {
            if(document.body.scrollTop>50){
                $('header').addClass('active');
                $('header .phone').fadeOut('slow',function(){
                    $('header .menu').fadeIn();
                })
            } else {
                $('header').removeClass('active');
                $('header .menu').fadeOut('slow',function(){
                    $('header .phone').fadeIn();
                })
            }
        })
    }
}
header.controller();
