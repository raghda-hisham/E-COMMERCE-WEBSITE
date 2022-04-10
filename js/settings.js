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

//setting
$('#profile').click(function(){
    $(".profileList").css({"display":"block"});
    $(".orderList").css({"display":"none"});
    $(".LngList").css({"display":"none"});
    $(".privacy").css({"display":"none"});

})

$('#orders').click(function(){
    $(".OrderList").css({"display":"block"});
    $(".profileList").css({"display":"none"});
    $(".LngList").css({"display":"none"});
    $(".privacy").css({"display":"none"});


})

$('#lang').click(function(){
    $(".OrderList").css({"display":"none"});
    $(".profileList").css({"display":"none"});
    $(".LngList").css({"display":"block"});
    $(".privacy").css({"display":"none"});



})
function privacy(){
    $(".OrderList").css({"display":"none"});
    $(".profileList").css({"display":"none"});
    $(".LngList").css({"display":"none"});
    $(".privacy").css({"display":"block"});
}