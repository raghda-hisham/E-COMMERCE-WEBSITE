
window.onload=function(){
    if(localStorage.lang==="arabic"){
       arabic();
    }
}

function arabic(){
       var n=parseInt(localStorage.getItem('numOfItems'));
       console.log(n);
       document.querySelector('.myCart-num').innerHTML="عربتي( "+n+" غرض)";
      $(".item").html(`غرض`);
      $(".quantity").html(`الكمية `);
      $(".unit").html(`السعر`);
      $(".subtotal").html(`المبلغ الكلي`);
      $(".totalPrice").html(` إجمالي السعر : `);
      $('.call-to-order').html(`الاتصال للطلب`);
      $('.complite-your-order').html(`لإكمال طلبك`);
      $('.remove').html(`حذف <i class="fas fa-trash-alt"></i> `);


     


    rtl();
    navAR();
    footerAR();

    
    let  productContainer=JSON.parse(localStorage.getItem('productsInCart'));
    for(var i=0; i<productContainer.length;i++){
        if(productContainer[i].number!=0){
          $('.card-title').html(productContainer[i].aName);
        }
     }
}

function english(){
    $(".myCart-num").html(`MY CART(<span id="num"></span> item)`);
    $(".item").html(`ITEM`);
    $(".quantity").html(`QUANTITY `);
    $(".unit").html(`UNIT PRICE`);
    $(".subtotal").html(`SUBTOTAL`);
    $(".totalPrice").html(` total price :<span id="totalPrice">0</span> `);
    $('.call-to-order').html(`call to order`);
    $('.complite-your-order').html(`complite your order`);


    ltr();
    navEN();
    footerEN();
        
    let  productContainer=JSON.parse(localStorage.getItem('productsInCart'));
    for(var i=0; i<productContainer.length;i++){
        if(productContainer[i].number!=0){
          $('.card-title').html(productContainer[i].Name);
        }
     }
 }

function rtl() {  
    // document.querySelectorAll('.carsouelHeader').forEach(para => {
    //     para.dir = "rtl"
    // })
    document.querySelector(".myCart-num").dir="rtl"
    document.querySelector('table').dir = "rtl" ;
    document.querySelector('.cards').dir='rtl';
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="rtl";
}


function ltr() {  
    document.querySelector(".myCart-num").dir="ltr"
    document.querySelector('table').dir = "ltr" ;
    document.querySelector('.cards').dir='ltr';
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="ltr";
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