
window.onload=function(){
    if(localStorage.lang==="arabic"){
       arabic();
    }
}

function arabic(){
   localStorage.setItem("lang","arabic");
   $("#privacy").html("الخصوصية");
   $("#profile").html("ملفي الشخصي");
   $("#orders").html("طلباتك");
   $("#about-us").html("عنا");
   $("#terms").html("الشروط");
   $("#lang").html("اللغة");
   $("#title1").html("العنوان");
   $("#title2").html("طلباتك");
   $("#title3").html("اللغة");
   $("#title4").html("سياسة الخصوصية");
   $("#listAdd").html(" عنوان الشحن الخاص بك:");
   $("#change").html("تغيير");
    rtl();
    navAR();
    footerAR();
}

function english(){
    localStorage.setItem("lang","english");
    $("#privacy").html("privacy");
    $("#profile").html("My Profile");
    $("#orders").html("My Orders");
    $("#about-us").html("About Us");
    $("#terms").html("Terms&Conditions");
    $("#lang").html("Country&Language");
    $("#title1").html("ADDRESS BOOK");
    $("#title2").html("YOUR ORDERS");
    $("#title3").html("COUNTRY & LANGUAGE");
    $("#title4").html("Privacy Policy");
    $("#listAdd").html("Your default shipping address:");
    $("#change").html("change");
    ltr();
    navEN();
    footerEN();
    
 }

function rtl() {  
    document.querySelector('.settings-list').dir = "auto" ;
    document.querySelector('.show-info').dir = "auto" ;
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="rtl";
    document.querySelector('.settings-section').style.flexDirection= "row-reverse" ;
}


function ltr() {  
    document.querySelector('.settings-list').dir = "auto" ;
    document.querySelector('.show-info').dir = "auto" ;
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="ltr";
    document.querySelector('.settings-section').style.flexDirection= "row" ;
}


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

function footerAR(){
    $(".footer-text").html("ابقى على اطلاع, اشترك في عروضنا!");
    $(".fname").html("الاسم الاول");
    $("#submit").html("إرسال");
    $(".social-media").html("التواصل الاجتماعي");
    $(".fb").html("فيسبوك");
    $(".insta").html("إنستاجرام");
    $(".twitter").html("تويتر");
    $(".Policy").html("السياسة");
    $(".PrivacyPolicy").html("سياسة  الخصوصية");
    $(".terms").html("الاحكام و الشروط");
    $(".call-btn").html("اتصل الآن");
}
function footerEN(){
    $(".footer-text").html("Stay informed, subscribe to our OFFERS!");
    $(".fname").html("First Name");
    $("#submit").html("Submit");
    $(".social-media").html("Social Media ");
    $(".fb").html("Facebook");
    $(".insta").html("Instagram");
    $(".twitter").html("Twitter");
    $(".Policy").html("Policy");
    $(".PrivacyPolicy").html("Privacy Policy");
    $(".terms").html("Terms&Conditions");
    $(".call-btn").html("Call NOW");
}