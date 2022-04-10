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