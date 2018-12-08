$(document).ready(function() {


    $(".main_btna, .main_btn").css("color", "red").add("nav > ul > li:eq(1)").on("click",function() {
        $(".overlay").fadeIn(1000);
        $(".modal").slideDown(1000);
    });

    $(".close").on("click",function() {
        $(".overlay").fadeOut(1000);
        $(".modal").slideUp(1000);
    });

    
});