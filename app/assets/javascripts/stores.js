$(function() {

    $('input[name="all"],input[name="title"]').bind('click', function(){

    var status = $(this).is(':checked');

    $('.is-active .store_category').trigger('click');

    $('input[type="checkbox"]', $(this).parent('li')).prop('checked', status);

    });
});
