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
          autoplayTimeout:1000,
          mouseDrag:false,
        autoRefresh: false
      });
  }

}, 2000)

$('.owl-next').trigger('next.owl.carousel', [200]);
// $('.owl-next').trigger('click');
//   $(window).on('focus', function () {
//     
// });


