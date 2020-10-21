$(document).ready(function(){
    //$("div").first().css("background-color", "yellow");
    //$("div").last().css("background-color", "yellow");

    //$('p').eq(1).css("background-color", "yellow");

    $("p").filter(".intro").css("background-color", "yellow");

    $("p").not(".intro").css("background", "lime");
});