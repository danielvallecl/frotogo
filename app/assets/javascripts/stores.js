$(function() {

    // $("#button1").click(function(){
        // $(".status").toggle();
    $('input[name="all"],input[name="title"]').bind('click', function(){
    var status = $(this).is(':checked');
    // $('input[type="checkbox"]', $(this).parent('li')).prop('checked', status);
    // $('input[type="checkbox"]', $(this).parent('li')).trigger('click');
    // console.log($(this).parent('li'));
    $('.is-active .store_category').trigger('click');
    // $(".store_category").trigger('click');
    // $( this ).toggleClass("off");
    // $( "#button2, #button3, #button4" ).slideToggle("slow")
    // $( this ).toggleClass("box");
    // $( "p" ).slideToggle( "slow" );
    });
    // $('.accordion-title').on('click', function (){
    // if ($('.accordion-item.is-active').length === 0) {
    //   $('.indexice').show()
    // } else {
    //   $('.indexice').hide()
    // }

  // })
});
