if($('.notification-carousel')){
  let slideSpeed=Number(document.querySelector('#notificationRibbon').dataset.time);
  $('.notification-carousel').owlCarousel({
      animateIn: 'flipInX',
      items:1,
      margin:0,
      stagePadding:0,
      // smartSpeed:4050,
      loop:true,
      dots:false,
      autoplay:true,
      // autoplayTimeout:3000,
      autoplaySpeed: 10,
      mouseDrag:false

 

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

