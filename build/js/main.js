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
header.controller();
