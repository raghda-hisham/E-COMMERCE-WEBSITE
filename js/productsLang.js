
(function(){
    if(localStorage.lang==="arabic"){
arabic();
    }
})()

//arabic
function arabic(){
    window.onload= function(){
        let ajax=new XMLHttpRequest;
        let listOfProduct ='';
        let arrName=[];
        let products=document.querySelector('.products');
        ajax.open("GET","https://e-commercecrvd.azurewebsites.net/products/products");
        ajax.send();
        ajax.onreadystatechange=function(){
            if (ajax.readyState=4){
                let res = JSON.parse(ajax.response);
                for(let i=0;i<res.length;i++){
                    listOfProduct+=`
                    <div class="card product">
                    <img src="imgs/images.png">
                    <div class="card-body d-flex justify-content-between">
                        <h6 class="card-title">${res[i].aName} </h6>
                        <div class="change-arrows ">
                            <i class="fas fa-caret-left" onclick="decrease(this)"></i>
                            <span class="numOfItems">1</span>
                            <i class="fas fa-caret-right" onclick="increase(this)"></i>
                        </div><!--./change-arrows-->
                    </div><!--./card-body-->
                    <div class="card-body card-body2 d-flex justify-content-between">
                      <h5 class="price">${res[i].price}</h5>
                      <button class="btn btn-warning add" id="btn" onclick="saveId(${res[i].id});add(this);">ADD</button>
                    </div>
                    </div>`
                    arrName.push(res[i].name);
                }
            products.innerHTML=listOfProduct;
            document.querySelectorAll('.card-body').forEach(para => {
                para.style.flexDirection = "row-reverse";
            })
            document.querySelectorAll('.card-title').forEach(para => {
                para.dir = "rtl";
            })
            document.querySelectorAll('.add').forEach(para => {
                para.innerHTML = "اضافة";
            })
          
            }  

        }        
    }    
    $(".see-more").html(`للمزيد `);
    rtl();
    navAR();
    footerAR();
}

function english(){
    window.onload= function(){
        let ajax=new XMLHttpRequest;
        let listOfProduct ='';
        let arrName=[];
        let products=document.querySelector('.products');
        ajax.open("GET","https://e-commercecrvd.azurewebsites.net/products/products");
        ajax.send();
        ajax.onreadystatechange=function(){
            if (ajax.readyState=4){
                let res = JSON.parse(ajax.response);
                for(let i=0;i<res.length;i++){
                    listOfProduct+=`
                    <div class="card product">
                    <img src="imgs/images.png">
                    <div class="card-body d-flex justify-content-between">
                        <h6 class="card-title">${res[i].name} </h6>
                        <div class="change-arrows ">
                            <i class="fas fa-caret-left" onclick="decrease(this)"></i>
                            <span class="numOfItems">1</span>
                            <i class="fas fa-caret-right" onclick="increase(this)"></i>
                        </div><!--./change-arrows-->
                    </div><!--./card-body-->
                    <div class="card-body card-body2 d-flex justify-content-between">
                      <h5 class="price">${res[i].price}</h5>
                      <button class="btn btn-warning add" id="btn" onclick="saveId(${res[i].id});add(this);">ADD</button>
                    </div>
                    </div>`
                    arrName.push(res[i].name);
                }
            products.innerHTML=listOfProduct;
            document.querySelectorAll('.card-body').forEach(para => {
                para.style.flexDirection = "row";
            })
            document.querySelectorAll('.card-title').forEach(para => {
                para.dir = "ltr";
            })
            document.querySelectorAll('.add').forEach(para => {
                para.innerHTML = "add";
            })
          
            }  

        }        
    }    
    $(".see-more").html(`SEE MORE`);
    ltr();
    navEN();
    footerEN();
    
 }

function rtl() {  
    document.querySelectorAll('.card-body').forEach(para => {
        para.style.flexDirection = "row-reverse";
    })
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="rtl";
    document.querySelectorAll('.card-title').forEach(para => {
        para.dir = "rtl";
    })
}


function ltr() {  
    document.querySelectorAll('.card-body').forEach(para => {
        para.style.flexDirection ="row";
    })
    document.querySelector('.nav__menu__list').dir = "auto" ;
    document.querySelector('footer').dir="ltr";
    document.querySelectorAll('.card-title').forEach(para => {
        para.dir = "ltr";
    })
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