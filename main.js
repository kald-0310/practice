$(function(){
    var $menu = $('.header-menu');
    var $list = $('.nav-menu li a');
    var headerHeight = $('.header').outerHeight();
    var height = $('.key-visual').innerHeight() - headerHeight;
    console.log(height);
    $menu.click(function(){
        $('.bar').toggleClass('close');
        if($('.mask').css('display') == 'none'){
            $('.mask').fadeIn(300);
            $('.header').css('background','transparent');
        } else {
            $('.mask').slideUp(300);
        };
    })
    $list.click(function(){
        $('.bar').toggleClass('close');
        $('.mask').slideUp(300);
    });
    $(window).scroll(function(){
        if($('.mask').css('display') === "none"){
            if($(window).scrollTop() >= height) {
                $('.header').css('background','rgba(51,51,51,0.7)');
            } else {
                $('.header').css('background','transparent');
            };
        } else {
            $('.header').css('background','transparent');
        };
    });
});