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
          autoplayTimeout:2000,
          mouseDrag:false,
        autoRefresh: false
      });
  
      $(window).on('focus', function () {
            $('.notification-carousel .owl-next').trigger('click');
      });
    
  }

}, 2000)

