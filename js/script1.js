$(document).ready(function(){  


    var s = skrollr.init();


    $(document).ready(function(){
      $('.js-scrollTo').on('click',function(){
        var page = $(this).attr('href');
        var speed = 1000;
        $('html, body').animate({scrollTop: $(page).offset().top }, speed);
        return false;
      });
    });
      


  function burgerMenu(){
    $( '.menuwrap' ).click(function() {
      $('.menu').toggleClass("active");
    });

    $( '.croix' ).click(function() {
      $('.menu').toggleClass("active");
    });
  }
  burgerMenu();

});