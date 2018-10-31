$(document).ready(function() {


  // Scroll on buttons
  $(".js--scroll-to-skills").click(function() {
    $("html, body").animate({scrollTop: $(".js--section-skills").offset().top}, 1000);
  });

  $(".js--scroll-to-projects").click(function() {
    $("html, body").animate({scrollTop: $(".js--section-projects").offset().top}, 1000);
  });

  $(".js--scroll-to-contact").click(function() {
    $("html, body").animate({scrollTop: $(".js--footer-contact").offset().top}, 1000);
  });

  $(".js--scroll-to-home").click(function() {
    $("html, body").animate({scrollTop: $(".js--header").offset().top}, 1000);
  });

  // Navigation Scroll 
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

  // Animations on scroll 
  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeInLeft");
  }, {
    offset: "70%"
  });

  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animated fadeInRight");
  }, {
    offset: "70%"
  });

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated fadeInUpBig slow");
  }, {
    offset: "40%"
  });

  $(".js--wp-4").waypoint(function(direction) {
    $(".js--wp-4").addClass("animated fadeInUp");
  }, {
    offset: "60%"
  });

  $(".js--wp-5").waypoint(function(direction) {
    $(".js--wp-5").addClass("animated fadeInUp");
  }, {
    offset: "70%"
  });

  $(".js--wp-6").waypoint(function(direction) {
    $(".js--wp-6").addClass("animated fadeInUp");
  }, {
    offset: "70%"
  });


});