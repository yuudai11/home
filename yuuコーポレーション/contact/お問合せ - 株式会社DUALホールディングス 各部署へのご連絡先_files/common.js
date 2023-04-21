jQuery(function ($) {
  $('#hambuger').on('click', function () {
    $('.g-nav').toggleClass('open');
    $(this).toggleClass('open');
    //$('header').toggleClass('open');
    $('body').toggleClass('open');
  });
  $('.menu-ctn_link a').click(function() {
    $('#hambuger').removeClass('open');
    $('.g-nav').removeClass('open');
    //$('body').removeClass('open');
  });

  $('.menu-item_head.mn_js__ttl, .menu-ctn.mn_js__body').mouseenter(function() {
    $(this).parent().find($('.header-backdrop')).addClass('header-backdrop_visible');
    //$('.p-wrapper').addClass('open');
  }).mouseleave(function() {
    $(this).parent().find($('.header-backdrop')).removeClass('header-backdrop_visible');
    //$('.p-wrapper').removeClass('open');
  });
});


$WidthSp = false;
function resizeWindow(){    
  if($(window).width() < 769){
    if(!$WidthSp){
      $('.mn_js__ttl').one("click", function(event) {
        event.preventDefault();
        $(this).next('.mn_js__body').stop().toggleClass('active');
        $(this).toggleClass('active');
      });
      $('.mn_js__ttl.active').click(function(e) {
        alert('aaa');
        var url = $(this).attr('href');
        window.location = url;
      });
      $WidthSp = true;
    }
  } else if($(window).width() > 770){
    if($WidthSp){
      $('.footer-menu_head').removeClass('mn_js__ttl');
      $('.menu-item_head').removeClass('mn_js__ttl');
      $(this).next('.mn_js__body').removeClass('active');
      $WidthSp = false;
    }
  }
};

$(document).ready(function(){
  resizeWindow();
});
$(window).on('load resize', function(){
  resizeWindow();
});






$(window).scroll(function(){
    var hd = $(".page-header");
        //mv = $(".main-visual").height();
    if ($(window).scrollTop() >= 100) {
        hd.addClass('is_active');
    }
    else {
        hd.removeClass('is_active');
    }
});

$(document).ready(function(){
  $('ul.tabs li:first-child').addClass('current');
  $('.tab-content:first-child').addClass('current');
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})

$(function () {
  $(window).scroll(function () {
    $('.js-view').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 30) {
        $(this).addClass('fadein');
      }
      else {
        $(this).removeClass('fadein');
      }
    });

  });
  jQuery(window).scroll();
});

$(function () {
  $(window).scroll(function () {
    $('.js-scroll, .js-ttl').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 30) {
        $(this).addClass('active');
      }
      else {
        $(this).removeClass('active');
      }
    });

  });
  jQuery(window).scroll();
});

$(document).ready(function(){
  $(".mv-slider").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed:2000,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: false,
      speed: 2000,
      fade: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  });
});


$(function () {
    $('.js-accordion-label').each(function () {
      $(this).click(function(){
        $(this).next('.js-accordion-body').slideToggle();
        $(this).toggleClass('active');   
      });
    });
});


$(document).ready(function() {
  if ($('.business-slider').length > 0) {
    $('.p-home_business').each(function (index, sliderWrap) {
      var $slider = $(sliderWrap).find('.business-slider');
      var $next = $(sliderWrap).find('.next');
      var $prev = $(sliderWrap).find('.prev');
      $slider.slick({
        dots: true,
        arrows: true,
        speed: 500,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 100,
        pauseOnHover: true,
        focusOnSelect: true,
        nextArrow: $next,
        prevArrow: $prev,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              infinite: true,
              //autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
        ]
      });
    });
  }
});

$(function() {

  jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});

$(function () {
  var smoothScroll = function () {
    var $header = $('.page-header');
    var headerHeight = $header.innerHeight();
    var speed = 500;
    var smoothScrollC = {
      init: function () {
        var me = this;
        $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          me.targetScroll($(this));
        })
      },
      targetScroll: function ($target) {
        var $hash = $($target.attr('href'));
        if ($hash.length) {
          $('html, body').animate({
            scrollTop: $hash.offset().top - headerHeight + 2
          }, speed, 'swing');
        }
      }
    };
    var smoothScrollParam = {
      location: location.pathname,
      init: function () {
        var me = this;

        if (!this.location.match('/admin/')) {
          if (location.search.match('anc=')) {
            me.anchor = location.search.split('anc=')[1];
          } else {
            me.anchor = location.search.split(/\?/)[1];
          }
          var hashP = '#' + this.anchor;
          $('html, body').animate({
            scrollTop: $(hashP).offset().top - headerHeight + 2
          }, speed, 'swing');
        }
      }
    }

    $(function () {
      smoothScrollC.init();
      if (location.href.match(/\?/)) {
        setTimeout(function () {
          smoothScrollParam.init();
        }, 100)
      }
    });
  }
  smoothScroll();

});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > 500){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('.p-anchor').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('.p-anchor').removeClass('nav-up').addClass('nav-dow');
        }
    }
    
    lastScrollTop = st;
}