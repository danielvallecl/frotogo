$(window).scroll(function(){
         var sticky = $('.top-menu'),
         scroll = $(window).scrollTop();
        if (scroll >= 200){
            sticky.addClass('fixed');
            sticky.slideDown(1000);
        }else{
            sticky.removeClass('fixed');
            sticky.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
        }
    });
