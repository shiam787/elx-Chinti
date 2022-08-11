if($('.notification-carousel')){
  $('.notification-carousel').owlCarousel({
      animateIn: 'flipInX',
      items:1,
      margin:0,
      stagePadding:0,
      // smartSpeed:450,
      loop:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:1000,
      mouseDrag:false

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

