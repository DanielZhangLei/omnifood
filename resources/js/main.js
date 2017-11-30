new StickyHeader($('.section-features'), $('nav'), "60px");
new RevealOnScroll($('.section-features .box'), "90%");
new RevealOnScroll($('.section-cities .box'), "90%");

// Mobile nav
$('.mobile-icon').click(function() {
  var nav = $('.main-nav');
  var mobileIcon = $('.mobile-icon i');

  nav.slideToggle(200);
  if(mobileIcon.hasClass('ion-navicon-round')) {
    mobileIcon.addClass('ion-close-round');
    mobileIcon.removeClass('ion-navicon-round');
  } else {
    mobileIcon.addClass('ion-navicon-round');
    mobileIcon.removeClass('ion-close-round');
  }
});
