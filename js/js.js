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
});
