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
   let ajax=new XMLHttpRequest;
   let listOfProduct ='';
   let products=document.querySelector('.products');
   ajax.open("GET","https://e-commercecrvdapi.azurewebsites.net/category/GetProductsInEachCategory");
   ajax.send();
   ajax.onreadystatechange=function(){
       if (ajax.readyState=4){
        let res = JSON.parse(ajax.response);
        // console.log(res);
        for(let i=0 ; i<res.length ; i++){

            for(let j=0 ; j<res[i].products.length; j++){
                console.log(res[i].products[j].price);
            }

        }
       }
    }