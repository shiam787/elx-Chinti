if($('.notification-carousel')){
  let slideSpeed=Number(document.querySelector('#notificationRibbon').dataset.time);
  $('.notification-carousel').owlCarousel({
      animateIn: 'flipInX',
      items:1,
      margin:0,
      stagePadding:0,
      // smartSpeed:2500,
      loop:true,
      dots:false,
      autoplay:true,
      autoplaySpeed:500,
      // autoplayTimeout:slideSpeed,
      mouseDrag:false

 

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

