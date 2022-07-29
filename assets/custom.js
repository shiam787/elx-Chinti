if($('.notification-carousel')){
  $('.notification-carousel').owlCarousel({
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      items:1,
      margin:30,
      stagePadding:0,
      smartSpeed:550,
      loop:true,
      dots:false,
      autoplay:true,
      mouseDrag:false,

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

