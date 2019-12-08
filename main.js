$('.open-menu-icon').on('click', function(){
    $('.main-nav-outer').addClass('open-menu');
})

$('.menu-close-icon').click(function(){
    $('.main-nav-outer').removeClass('open-menu');
})