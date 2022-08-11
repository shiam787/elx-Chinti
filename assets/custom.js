if($('.notification-carousel')){
  let slideSpeed=Number(document.querySelector('#notificationRibbon').dataset.time);
  $('.notification-carousel').owlCarousel({
      // animateIn: 'flipInX',
      // items:1,
      // margin:0,
      // stagePadding:0,
      smartSpeed:450,
      // loop:true,
      // dots:false,
      // autoplay:true,
      // autoplayTimeout:1000,
      // mouseDrag:false

    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true

  });
  $(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
}

