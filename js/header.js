$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.header').addClass('header_scrolled');
    }
    else {
        $('.header').removeClass('header_scrolled')
    }
});
function handleCloseOpen(event) {
    const menuList = event.currentTarget.nextElementSibling

    if(menuList.style.display === 'flex'){
        menuList.style.display = 'none'
    }
    else{
        menuList.style.display = 'flex'
    }
}