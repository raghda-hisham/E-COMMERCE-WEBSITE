
window.onload=function(){
    if(localStorage.lang==="arabic"){
       arabic();
    }
}

function arabic(){
      $(".recommended").html(`مقترح لك<i class="fas fa-arrow-left  carsouelHeader-arrow"></i> `);
      $(".topDeals").html(` افضل الصفقات <i class="fas fa-arrow-left  carsouelHeader-arrow"></i> `);
      $(".meat").html(`اللحوم <i class="fas fa-arrow-left  carsouelHeader-arrow"></i> `);
      $(".VEG").html(`الفاكهة و الخضراوات<i class="fas fa-arrow-left  carsouelHeader-arrow"></i> `);
      $(".HOMENEEDS").html(` مستلزمات المنزل <i class="fas fa-arrow-left  carsouelHeader-arrow"></i> `);
    rtl();
    navAR();
    footerAR();
}

function english(){
    $(".recommended").html(` RECOMMENDED FOR YOU <i class="fas fa-arrow-right  carsouelHeader-arrow"></i>`);
    $(".topDeals").html(` TOP DEALS <i class="fas fa-arrow-right  carsouelHeader-arrow"></i> `);
    $(".meat").html(` MEATS <i class="fas fa-arrow-right  carsouelHeader-arrow"></i> `);
    $(".VEG").html(`VEG&FRUITS <i class="fas fa-arrow-right  carsouelHeader-arrow"></i> `);
    $(".HOMENEEDS").html(` HOMENEEDS <i class="fas fa-arrow-right  carsouelHeader-arrow"></i> `);

    ltr();
    navEN();
    footerEN();
    
 }

function rtl() {  
    document.querySelectorAll('.carsouelHeader').forEach(para => {
        para.dir = "rtl"
    })
    document.querySelector('.items-responsive').dir = "rtl" ;
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="rtl";
    document.querySelectorAll('.item').forEach(para => {
        para.dir = "rtl"
    })
    document.querySelectorAll('.items-responsive').forEach(para => {
        para.dir = "rtl"
    })
}


function ltr() {  
    document.querySelector('.carsouelHeader').dir = "rtl" ;
    document.querySelector('.items-responsive').dir = "rtl" ;
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="ltr";
    document.querySelector('.owl-carousel').dir= "ltr" ;
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



//footer
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