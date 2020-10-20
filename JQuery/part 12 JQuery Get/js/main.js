$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: "+$("#lorem").text());
    });

   $("#btn2").click(function(){
       alert("Text: "+$("#lorem").html());
   });

    $("#btn").click(function() {
        alert($("#saqib").val());
    });

    $("#btn3").click(function(){
        alert($("#cf").attr("href"));
    });
});