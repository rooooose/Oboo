$(document).ready(function(){

  var $carousel = $('.main-carousel').flickity({
    // options
    prevNextButtons: false,
    cellAlign: 'left',
    contain: true,
    imagesLoaded: true,
    pageDots: false
  });

    $('div.previous').on( 'click', function() {
      $carousel.flickity('previous');
    });


    $('div.next').on( 'click', function() {
      $carousel.flickity('next');
    });


  function color(){
     $( '.color' ).click(function() {
      $(this).toggleClass("active");
      $( '.color' ).not(this).removeClass("active");
    });
  }  
  color();


  function size(){
    $( '.sizeContent span' ).click(function() {
      $(this).toggleClass("active");
      $( '.sizeContent span' ).not(this).removeClass("active");
    });
  }
  size();
    
  function cart(){
    $( '.QuantityContent .plus' ).click(function() {
       var quantity = parseInt($('.QuantityContent span').text());
       $('.QuantityContent span').text(quantity+1);
    });

    $( '.QuantityContent .moins' ).click(function() {
      var quantity = parseInt($('.QuantityContent span').text());
      if(quantity>1){
        $('.QuantityContent span').text(quantity-1);
      }
    });

    $( '.QuantityContent .plus' ).click(function() {
       var quantity = parseFloat($('.QuantityContent span').text());
       var price = 49.50*quantity;
       $('.priceContent span:first-of-type').text(price.toFixed(2));
    });

    $( '.QuantityContent .moins' ).click(function() {
       var price = parseFloat($('.priceContent span:first-of-type').text()); 
       var priceTotal = price-49.50;
       if(price>49.50){
        $('.priceContent span:first-of-type').text(priceTotal.toFixed(2));
       }
    });
  }  
  cart();

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
