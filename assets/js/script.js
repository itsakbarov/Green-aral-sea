
 $(document).ready(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() > 50) {
             $('.site_header').addClass('fixed');
         } else {
             $('.site_header').removeClass('fixed');
         }
     });
     $('.hamburger_btn').click(function () {
         $('.hamburger_menu').css('transform', 'translateX(0)')
     });
     $('.close_btn').click(function () {
         $('.hamburger_menu').css('transform', 'translateX(-360px)')
     });


     $('.modal_opener').click(function () {
         $('.modal').show(300)
     });

     $('.close_modal').click(function () {
         $('.modal').hide(300)
     });

     $(document).dblclick(function (event) {
         if (!$(event.target).closest(".modal").length) {
             $("body").find(".modal").hide();
         }
     });

 });

 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 3
         },
         1000: {
             items: 3
         }
     }
 });
 var owl = $('.owl-carousel')
 $('#prev_btn').click(function () {
     owl.trigger('prev.owl.carousel');
 });

 $('#next_btn').click(function () {
     owl.trigger('next.owl.carousel');
 });