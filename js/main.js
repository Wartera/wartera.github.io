$(document).ready(function(){
  
  //Dropdown Navbar 
  function toggleDropdown (e) {
    const _d = $(e.target).closest('.dropdown'),
        _m = $('.dropdown-menu', _d);
    setTimeout(function(){
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
  }
  
  $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
  
  /* not needed, prevents page reload for SO example on menu link clicked */
  $('.dropdown a').on('click tap', e => e.preventDefault())
  //Dropdown Navbar END

  //OWL Carousel
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    animateOut: 'fadeOut',
    loop:true,
    autoplay:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  });
  //OWL Carousel END

  //Scroll Button 
  var btn = $('#ScroolButton');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  //Scroll Button END 
});

git clone https://github.com/Wartera/wartera.github.io