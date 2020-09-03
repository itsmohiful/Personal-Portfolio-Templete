$('.client .client-area .slideer').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  autoplaySpeed:2000,
  slidesToShow: 2,
  prevArrow:'.client .client-area .slider-btn .prev',
  nextArrow:'.client .client-area .slider-btn .next',
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
      
//counter up
$('.count').counterUp({
  delay:10,
  time:2000
});


//porfolio-filter

$(document).ready(function () {


  let $btns = $('.portfolio .button-group button');


  $btns.click(function (e) {

      $('.portfolio .button-group button').removeClass('active');
      e.target.classList.add('active');

      let selector = $(e.target).attr('data-filter');
      $('.portfolio .grid').isotope({
          filter: selector
      });

      return false;
  })

  $('.portfolio .button-group #btn1').trigger('click');

  $('.portfolio .grid .test-popup-link').magnificPopup({
      type: 'image',
      gallery: { enabled: true }
  });


});


// // animation
// $(document).ready(function(){
//   $('.form-section').waypoint(function(direction){
//     $('.form-section').addClass('animated fadeInLeft')
//   },{
//     offset:'50%'
//   })
// });