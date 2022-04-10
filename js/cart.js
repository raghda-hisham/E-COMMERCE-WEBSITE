let productContainer;
if(localStorage.getItem("productsInCart")==null || localStorage.getItem("productsInCart")== " "){
    productContainer=[];
    disableBtn();
}
else
{
    productContainer=JSON.parse(localStorage.getItem('productsInCart'));
    displayCart();
    sumOfItems();
    disableBtn();

}

//btn diable and inable
function disableBtn(){
if(localStorage.getItem("numOfItems") =="0"){
    $(".complite-order-link").attr('href', '#').css({'cursor': 'pointer', 'pointer-events' : 'none'});
    $('.complite-your-order').attr("disabled");
    $('.complite-order-link').attr("disabled");
}
else{
    $(".complite-order-link").attr('href', 'payment.html').css({'cursor': 'pointer'});
    $('.complite-your-order').removeAttr("disabled");
    $('.complite-order-link').removeAttr("disabled");
}
};


//display fun for the items
function displayCart(){
    var cards=``;
    var cadrsResponsive=``;
    var sum=0;
    var numInTit=0;
    for(var i=0; i<productContainer.length;i++){
        if(productContainer[i].number!=0){
         numInTit=i;
         cards+=`<tr>
         <td class="border-1 td1">
             <div class="card d-flex bg-light flex-row border-0" style="height: 150px;">
               <img src="imgs/images.png" class="card-img-top" alt="...">
               <div class="card-body text-dark d-flex flex-column justify-content-between">
                 <h5 class="card-title">${productContainer[i].Name}</h5>
                 <a href="#" class="remove"  onclick="deleteProduct(`+i+`)"><i class="fas fa-trash-alt"></i> REMOVE</a>
               </div>
             </div>
         </td>
         <td class="text-center border-1 td2">
             <a class="decrease me-1"><i class="fas fa-minus-circle" onclick="decrease(`+i+`)"></i></a>
             <span class="item1-num me-1" ">${productContainer[i].number}</span>
             <a class="increase me-1"><i class="fas fa-plus-circle" onclick="return increase(`+i+`);sumOfItems(this);"></i></a>
         </td>
         <td class="text-center price border-1 fw-bold">${productContainer[i].price}</td>
         <td class="text-center total border-1 fw-bold">${productContainer[i].totalPrice}</td>
     </tr>`
     //for responsive
     cadrsResponsive+=`<div class="card bg-light flex-row border-0 card-mob" style="height: 150px;">
                               <img src="imgs/images.png" class="card-img-top" alt="...">
                               <div class="card-body text-dark d-flex flex-column justify-content-between">
                                     <div class="body-title">
                                      <h5 class="card-title">${productContainer[i].Name}</h5>
                                      <h6 ><strong>EGY ${productContainer[i].price}</strong></h6>
                                     </div>
                                     <div class="d-flex flex-row justify-content-between">
                                        <a href="#" class="remove"  onclick="deleteProduct(`+i+`)"><i class="fas fa-trash-alt"></i> REMOVE</a>
                                        <div class="change">
                                          <a class="decrease me-1"><i class="fas fa-minus-circle"  onclick="decrease(`+i+`)"></i></a>
                                          <span class="item1-num me-1">${productContainer[i].number}</span>
                                          <a class="increase me-1"><i class="fas fa-plus-circle" onclick="return increase(`+i+`);sumOfItems(this);"></i></a>
                                        </div><!--./change-->
                                     </div><!--./-->
                               </div><!--./card-body-->
                        </div><!--./card-->`
     sum+=productContainer[i].totalPrice;
    //  totalItemNum+=productContainer[i].number;      
    }
   }
   $('#tableBody').html(cards);
   $('.cards').html(cadrsResponsive);
   disableBtn();
}


//increase items (+)
var n="";
function increase(i){
    //increase num
    n= productContainer[i].number;
    productContainer[i].number=n+1;

    //increase total price
    var total= parseInt(productContainer[i].totalPrice)+parseInt(productContainer[i].price);
    productContainer[i].totalPrice=total;
    localStorage.setItem("productsInCart",JSON.stringify(productContainer));
    sumOfItems(); 
    displayCart();
}

//decrease items (-)
function decrease(d){

    n= productContainer[d].number;
    var total;
    if(n>1){  
        //decrease num of items
        n= productContainer[d].number;
        productContainer[d].number=n-1;

        //decrease total price
        total= parseInt(productContainer[d].totalPrice)-parseInt(productContainer[d].price);
        productContainer[d].totalPrice=total;
        localStorage.setItem("productsInCart",JSON.stringify(productContainer));
        sumOfItems();
        displayCart();
    }
    else{
        n.html(0);
    }
}



//delete
function deleteProduct(productIndex){
    productContainer.splice(productIndex,1);
    localStorage.setItem("productsInCart",JSON.stringify(productContainer));
    sumOfItems();
    displayCart();
    disableBtn();
}


//total price for all items
function sumOfItems(){
    let totPriceItems=0;
    var totalItemNum=0;
    for(let i=0;i<productContainer.length;i++){
        totPriceItems+=productContainer[i].totalPrice;
        totalItemNum+=productContainer[i].number;      
    }
    $('#totalPrice').html(totPriceItems);
    $('.price').html(totPriceItems);
    $('.num').html(totalItemNum);
    localStorage.setItem("numOfItems",JSON.stringify(parseInt(totalItemNum)));  
 }

