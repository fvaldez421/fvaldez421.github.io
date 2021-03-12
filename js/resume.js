(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, 'easeInOutExpo');
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


  /** ____________ BEGIN POPOVER LOGIC ____________ */
  var mobile = (window.matchMedia("(max-width: 992px)").matches) ? true : false;
  var activePopover = null;
  var ENUM_SITE = 'site',
    ENUM_SOURCE = 'source',
    ENUM_HIDE = 'hide',
    ENUM_SHOW = 'show';

  function togglePopover(selector, action) {
    var tgt = $(selector);
    if (action === undefined) {
      action = activePopover ? ENUM_HIDE : ENUM_SHOW;
    }
    if (action === ENUM_HIDE) {
      activePopover = null;
    } else if (action === ENUM_SHOW) {
      activePopover = tgt && tgt.id || true;
    }
    tgt.popover(action);
    return tgt;
  }

  function closeAllPopovers() {
    togglePopover('.link', ENUM_HIDE);
  }

  function makePopoverBtn(type, link, isProject) {
    var label = '',
      className = '';
    if (type === ENUM_SITE) {
      label = isProject ? 'Live Site' : 'Read More';
      className = 'btn btn-primary';
    } else if (type === ENUM_SOURCE) {
      label = 'Source Code';
      className = 'btn btn-success';
    }
    if (!!type && !!link) {
      return "<a href=" + link + " target='_blank' class='" + className + "'>" + label + "</a>";
    }
    return '';
  }

  function makePopoverContent(_this) {
    var siteLink = $(_this).attr('dep');
    var sourceLink = $(_this).attr('git');
    var isProject = !!($(_this).attr('project'));
    var dBtn = makePopoverBtn(ENUM_SITE, siteLink, isProject);
    var gBtn = makePopoverBtn(ENUM_SOURCE, sourceLink, isProject);
    return dBtn + ' ' + gBtn;
  }

  function isLink(el) {
    if (!!el) {
      return el.hasAttribute('dep') || el.hasAttribute('git')
    }
  }

  if (mobile) {
    $('#titleInst').html('(Tap etry titles for options)')
    $('.link').on('click', function () {
      $(this).popover({
        trigger: 'manual',
        placement: 'left',
        html: true,
        container: 'body',
        content: makePopoverContent(this)
      });
      closeAllPopovers();
      togglePopover(this);
    });

    $('body').on('click', function (evt) {
      var isLinkClick = isLink(evt && evt.target)
      if (activePopover && !isLinkClick) {
        closeAllPopovers();
      }
    });
  } else {
    $('.link').hover(function () {
      // Starts popover with manual trigger (mouseenter and mouseleave)
      $(this).popover({
        trigger: 'manual',
        placement: 'right',
        html: true,
        container: 'body',
        content: makePopoverContent(this)
      }).hover(function () {
        if ($(this).is(':hover') === true) {
          $(this).popover(ENUM_SHOW);
          togglePopover(this, ENUM_SHOW)
        }
        $('.popover').on('mouseleave', function () {
          togglePopover(this, ENUM_HIDE);
        });
      }).on('mouseenter', function () {
        if ($(this).is(':hover') === true) {
          $(this).popover(ENUM_SHOW);
          togglePopover(this, ENUM_SHOW)
        }
        $('.popover').on('mouseleave', function () {
          togglePopover(this, ENUM_HIDE);
        });
      }).on('mouseleave', function () {
        var _this = this;
        setTimeout(function () {
          if ($('.popover:hover').length <= 0 && !$(_this).is(':hover')) {
            togglePopover('.popover', ENUM_HIDE);
          }
        }, 150);
      });
      if ($(this).is(':hover')) {
        togglePopover(this);
      }
    });
  }
})(jQuery); // End of use strict
