
   //products
//    window.onload= function(){
//     let ajax=new XMLHttpRequest;
//     let listOfProduct ='';
//     let arrName=[];
//     let products=document.querySelector('.products');
//     ajax.open("GET","http://mohamedshafik224-001-site1.itempurl.com/products/products");
//     ajax.send();
//     ajax.onreadystatechange=function(){
//         if (ajax.readyState=4){
//             let res = JSON.parse(ajax.response);
//             console.log(res);
//             for(let i=0;i<res.length;i++){
//                 listOfProduct+=`
//                 <div class="card product">
//                 <img src="imgs/images.png">
//                 <div class="card-body d-flex justify-content-between">
//                     <h6 class="card-title">${res[i].name} </h6>
//                     <div class="change-arrows ">
//                         <i class="fas fa-caret-left" onclick="decrease(this)"></i>
//                         <span class="numOfItems">1</span>
//                         <i class="fas fa-caret-right" onclick="increase(this)"></i>
//                     </div><!--./change-arrows-->
//                 </div><!--./card-body-->
//                 <div class="card-body card-body2 d-flex justify-content-between">
//                   <h5 class="price">${res[i].price}</h5>
//                   <button class="btn btn-warning add" id="btn" onclick="saveId(${res[i].id});add(this);">ADD</button>
//                 </div>
//                 </div>`
//                 arrName.push(res[i].name);
//             }
//         products.innerHTML=listOfProduct;
      
//         }  
//     }    
//         // console.log(document.querySelector('.card-title').innerHTML);

// }    
  console.log(arrName);
    //saveId
    function saveId(id){
         localStorage.setItem("productId",id);
    }

   
    //add to cart    
    let sum;
    if(localStorage.getItem('numOfItems')=="null" || localStorage.getItem('numOfItems')==null ){
      sum=0;
    }
    else{
    sum =JSON.parse(localStorage.getItem('numOfItems'));
        $('#shoppingCart-num').text(sum);
    }
    

    let productContainer;
    if(localStorage.getItem("productsInCart")==null){
        productContainer=[];
    }
    else{
        productContainer=JSON.parse(localStorage.getItem('productsInCart'));
    }


    //add
    function add(a){ 
        var n=$(a).parent(".card-body2").siblings(".card-body").children(".change-arrows ").children(".numOfItems").html();
        var name = $(a).parent(".card-body2").siblings(".card-body").children("h6").html();
        var price = $(a).siblings(".price").html();
        var total= parseInt(n)*parseInt(price);
        var id=JSON.parse(localStorage.getItem("productId"));
        var product={
            Name:name,
            number:parseInt(n),
            price:price,
            totalPrice:total,
            id:id,
        }

        if(localStorage.getItem("numOfItems") == "null" ||localStorage.getItem("numOfItems") == null){
            var sum= $('#shoppingCart-num').html();
            sum = parseInt(sum) + parseInt(n);
            console.log(sum);
            localStorage.setItem("sum",JSON.stringify(parseInt(sum)));  
            $('#shoppingCart-num').text(parseInt(sum));  
        }
        else{
            var sum2=localStorage.getItem("numOfItems");  
            sum2 = parseInt(sum2) + parseInt(n); 
            localStorage.setItem("numOfItems",JSON.stringify(parseInt(sum2)));  
            $('#shoppingCart-num').text(parseInt(sum2)); 
        }   
        let item=productContainer.find( (i) => i.id === product.id);     
        if(item){
            product.number+=1;
            // console.log(product.number);
        }
        else{
            productContainer.push(product);
        }

        localStorage.setItem("productsInCart",JSON.stringify(productContainer));  
    };


    // increase
    var right = document.querySelectorAll('.fa-caret-right');
    function increase(e){
       n= $(e).siblings(".numOfItems").html();
       var r=$(e).siblings(".numOfItems").text(parseInt(n)+1);
    }

    // decrease

    function decrease(d){

        n= $(d).siblings(".numOfItems").html();
 
        if(n>0){     
            $(d).siblings(".numOfItems").text(parseInt(n)-1);
        }
        else{
            $(d).siblings(".numOfItems").text(parseInt(n));
        }
    }

    //search
    
//    function search(searchTerm){
//     var cartona=``;
//     for(var i=0;i<productContainer.length;i++){
//       if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//        productContainer[i].category.toLowerCase().includes(searchTerm.toLowerCase())  ){
//         cartona+=`<tr>
//         <td>${i}</td>
//         <td>${productContainer[i].name}</td>
//         <td>${productContainer[i].price}</td>
//         <td>${productContainer[i].category}</td>
//         <td>${productContainer[i].desc}</td>
//         <td><button class="btn btn-outline-warning">update</button></td>
//         <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger" id="delete">delete</button></td>
//        </tr>`;
//       }
//       document.getElementById("tablebody").innerHTML=cartona;
//      }
//     }
function search(searchTerm){
    let ajax=new XMLHttpRequest;
    let listOfProduct ='';
    let arrName=[];
    let products=document.querySelector('.products');
    ajax.open("GET","http://mohamedshafik224-001-site1.itempurl.com/products/products");
    ajax.send();
    ajax.onreadystatechange=function(){
        if (ajax.readyState=4){
            let res = JSON.parse(ajax.response);
            for(let i=0;i<res.length;i++){
                if(res[i].name.toLowerCase().includes(searchTerm.toLowerCase())   ){         
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
        }  
    }
}
}

