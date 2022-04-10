
window.onload=function(){
    if(localStorage.lang==="arabic"){
       arabic();
    }
}

function arabic(){
   $(".signup-text").html("!تسجيل الدخول لموصلة التسوق لمنتجاتنا المذهلة");
   $(".signup-header").html("تسجيل الدخول");
   $("#name").html("الاسم");
   $("#email").html("عنوان البريد");
   $("#phone").html("رقم الهاتف");
   $(".signup-link").html(`<a href="signup.html">Sign up</a> لا تملك حساب ؟`);
   $("#submit").html("ارسل");
   rtl();
   navAR(); 
}

function english(){
    $(".signup-text").html("signup TO CONTINUE SHOPPING OUR INCREDABLE PRODUCTS");
    $(".signup-header").html("signup Form");
    $("#name").html("Name");
    $("#email").html("E-mail");
    $("#phone").html("Phone Number");
    $(".signup-link").html("Don't have an account? ");
    $("#submit").html("Submit");
    ltr();
    navEN();    
}

function rtl(){  
    $('.nav__menu__list').css('direction','rtl');
    $('.container').css('textAlign','right');
    $('.signup-link').css('textAlign','right');
}


function ltr(){  
    $('.nav__menu__list').css('direction','ltr');
    $('.container').css('textAlign','left');
    $('.signup-link').css('textAlign','left');
}

//nav
function navAR(){
    $("#nav-home").html("الصفحة الرئيسية");
    $("#nav-login").html("تسجيل الدخول");
    $("#nav-cart").html("مشترياتك");
    $("#nav-contact").html("تواصل معنا");
    $("#nav-settings").html("الإعدادات");
}

function navEN(){
    $("#nav-home").html("Home");
    $("#nav-login").html("login");
    $("#nav-cart").html("Cart");
    $("#nav-contact").html("Contact Us");
    $("#nav-settings").html("Settings");
}

