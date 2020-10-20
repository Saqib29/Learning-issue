$(document).ready(function() {
    $("#btn1").click(function(){
        $("#lorem1").text("Hi Saqib");
    });

    $("#btn2").click(function(){
        $("#lorem2").html("<h1>Hello Saqib</h1>");
    });

    $("#btn3").click(function(){
        $("#lorem3").val("Enter your name here");
    });

    $("#btn").click(function(){
        $("#cf").attr("href", "https://www.saqib.com");
    });
});