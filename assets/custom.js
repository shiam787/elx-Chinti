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

  // setTimeout(function(){
     var owl = $('.notification-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
      console.log("changed ow carousel: ", event);
        
    })
  // }, 2000)

 
//   $(window).on('focus', function () {
//     $('.owl-next').trigger('click');
// });
}

