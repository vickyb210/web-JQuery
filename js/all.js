// swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  });


  // JQuery
  $(document).ready(function () {
    lightbox.option ({
        'resizeDuration': 1
    });

    // fontawesome
    $('a[name~="fb"]').addClass('fab fa-facebook-square');
    $('a[name~="twitter"]').addClass('fab fa-twitter');
    $('a[name~="top"]').addClass('fas fa-arrow-up');    

    //nav的hover效果
    $('nav ul li').hover(function(){
      $(this).toggleClass('hover');
      $(this).find('ul').slideToggle();
    })

    //返回頂部
    $('.top a').click(function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      },1000);
    });
});