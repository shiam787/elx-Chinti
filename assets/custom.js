if($('.notification-carousel')){
  let slideSpeed=Number(document.querySelector('#notificationRibbon').dataset.time);
  $('.notification-carousel').owlCarousel({
      animateIn: 'flipInX',
      items:1,
      // margin:0,
      // stagePadding:0,
      // smartSpeed:1000,
      // loop:true,
      // dots:false,
      autoplay:true,
      // autoplaySpeed:2500,
      autoplayTimeout:1000,
      // mouseDrag:false

 

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

