(function ($) {
  "use strict"; // Start of use strict
  var mobile = (window.matchMedia("(max-width: 992px)").matches) ? true : false;
  var popoverActive = false;

  function togglePopover(selector, action) {
    if (!action) action = 'show';
    $(selector).popover(action);
  }

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
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
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });


  // Sets below variabes to pertaining project and runs popover
  if (mobile) {
    $("#titleInst").html("(Click titles for options)")
    $(".link").on("click", function () {
      var dep = $(this).attr("dep");
      var git = $(this).attr("git");
      var dBtn = "<a href=" + dep + " target='_blank' class='btn btn-success'>Live</a>" + " ";
      var gBtn = "<a href=" + git + " target='_blank' class='btn btn-secondary'>GitHub</a>";
      if (dep === undefined) { // conditionals for CLI or private repositories
        dBtn = "";
      }
      if (git === undefined) {
        gBtn = "";
      }
      $(this).popover({
        trigger: "manual",
        placement: "right",
        html: true,
        content: dBtn + gBtn,
        container: "body"
      });
      var toggleAction = popoverActive ? "hide" : "show";
      togglePopover(this, toggleAction);
      popoverActive = !popoverActive;
    });

  } else {
    $(".link").hover(function () {
      var dep = $(this).attr("dep");
      var git = $(this).attr("git");
      var dBtn = "<a href=" + dep + " target='_blank' class='btn btn-success'>Live</a>" + " ";
      var gBtn = "<a href=" + git + " target='_blank' class='btn btn-secondary'>GitHub</a>";
      if (dep === undefined) { // conditionals for CLI or private repositories
        dBtn = "";
      }
      if (git === undefined) {
        gBtn = "";
      }

      // Starts popover with manual trigger (mouseenter and mouseleave)
      $(this).popover({
        trigger: "manual",
        placement: "right",
        html: true,
        content: dBtn + gBtn,
        container: "body"
      }).hover(function () {
        if ($(this).is(":hover") === true) {
          $(this).popover("show");
          togglePopover(this, 'show')
        }
        $(".popover").on("mouseleave", function () {
          togglePopover(this, "hide");
        });
      }).on("mouseenter", function () {
        if ($(this).is(":hover") === true) {
          $(this).popover("show");
          togglePopover(this, 'show')
        }
        $(".popover").on("mouseleave", function () {
          togglePopover(this, "hide");
        });
      }).on("mouseleave", function () {
        var _this = this;

        setTimeout(function () {
          if ($(".popover:hover").length <= 0 && !$(_this).is(":hover")) {
            togglePopover(".popover", "hide");
          }
        }, 200);

      });
      if ($(this).is(":hover")) togglePopover(this)
    });
  }
})(jQuery); // End of use strict
