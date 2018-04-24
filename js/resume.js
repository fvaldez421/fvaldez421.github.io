(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Sets below variabes to pertaining project and runs popover
  $(".link").hover(function() {
    var id = $(this).attr("id");
    var depl = $(this).attr("depl");
    var git = $(this).attr("git");
    var dBtn = "<a href=" + depl + "><button class='btn btn-success'>Deployed</button></a>";
    var gBtn = "<a href=" + git + "><button class='btn btn-secondary'>GitHub</button></a>";
    var counter;

  // Starts popover with manual trigger (mouseenter and mouseleave)
    $("#" + id).popover({ 
      trigger: "manual",
      placement: "right",
      html: true,
      content: dBtn + " " + gBtn,
      container: "body"
    }).on("mouseenter", function() {
      var _this = this; 

      clearTimeout(counter);
      $("#" + id).not(_this).popover("hide");

      counter = setTimeout(function() {
        if ($(_this).is(":hover")) {
          $(_this).popover("show");
        }
        $(".popover").on("mouseleave", function() {
          $("#" + id).popover("hide");
        });
      }, 400);

    }).on("mouseleave", function() {
      var _this = this;

      setTimeout(function() {
        if (!$(".popover:hover").length) {
          if (!$(_this).is(":hover")) {
            $(_this).popover("hide");
          }
        }
      }, 200);

    });
  }); 

})(jQuery); // End of use strict
