if($('.notification-carousel')){
  let slideSpeed=Number(document.querySelector('#notificationRibbon').dataset.time);
  $('.notification-carousel').owlCarousel({
      animateIn: 'flipInX',
      items:1,
      margin:0,
      stagePadding:0,
      // smartSpeed:450,
      loop:true,
      dots:false,
      autoplay:true,
      // autoplaySpeed:2500,
      autoplayTimeout:1000,
      mouseDrag:false

 

  });

  var owl = $('.notification-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
      console.log("changed ow carousel: ", event);
        $('.notification-carousel').data()['owl.carousel'].options.autoplayTimeout = 10000;
        $('.notification-carousel').data()['owl.carousel'].options.autoplaySpeed = 100;
        $('.notification-carousel').trigger("refresh.owl.carousel");
    })
//   $(window).on('focus', function () {
//     $('.owl-next').trigger('click');
// });
}

