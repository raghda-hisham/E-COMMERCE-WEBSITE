// nav bar

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop();  // get current position

    if (currentScroll >= 100) {           // apply position: fixed if you
        $('.navbar').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   // apply position: static
        $('.navbar').css({                      // if you scroll above it
            position: 'static'
        });
    }

});

//end nav bar
   // nav bar
   $(function() {

    $('.nav__button').click(function() {
        navTransformation();
    });

    $('.nav__menu').click(function() {
        navTransformation();
    });

    function navTransformation() {
        $(".nav__menu").toggleClass('expandNav');
        $('.nav__button').toggleClass('nav__button-hover');
        $('.nav__button').toggleClass('nav_button-animation');
    }

});
//end nav bar