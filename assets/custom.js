setTimeout(function(){
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
          autoplaySpeed:2500,
          autoplayTimeout:1500,
          mouseDrag:false,
        autoRefresh: false
      });
  }

//    $('.owl-next').trigger('next.owl.carousel', [200]);

//   var owl = $('.notification-carousel');

// owl.on('changed.owl.carousel', function(event) {
//   console.log("event: ", event);
//     $('.notification-carousel').trigger('stop.owl.autoplay');
//    $('.notification-carousel').trigger('play.owl.autoplay');
// })

}, 2000)

// $('.owl-next').trigger('next.owl.carousel', [200]);
// $('.owl-next').trigger('click');
//   $(window).on('focus', function () {
//     
// });


