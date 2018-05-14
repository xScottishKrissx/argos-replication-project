$(document).ready(function() {
  $('.product-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
      }
    },
    {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
    }
    ]

      //breakpoints
      //default - 2 products shown
      //576px - 3 products
      //768px - 4 products
  });


  //scroll to top button logic
   function scrollToAnchor(aid) {
     var aTag = $("meta[name='" + aid + "']");
     $('html,body').animate({
       scrollTop: aTag.offset().top
     }, 300);
     console.log("Scroll End");
   }

   $("#scroll-to-top-button").click(function() {
     console.log("Scroll to top");
     scrollToAnchor('viewport');
   });
});

$(window).on("scroll", function(){
  console.log( $(window).scrollTop()  );
  //Show or Hide Depending on Position
  if ($(window).scrollTop() < 1800) {
    $("#scroll-to-top-button").css("visibility","hidden");
    $("#scroll-to-top-button").css("right","-100%");

  }else if($(window).scrollTop() > 1800){
      $("#scroll-to-top-button").css("visibility","visible");
      $("#scroll-to-top-button").css("right","0");
  };

});
