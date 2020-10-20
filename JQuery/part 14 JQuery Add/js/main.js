$(document).ready(function(){
    $("#bt").click(function(){
        $("p").prepend("<b>Saqib </b>");
        $("p").append("<b> Aminul</b>");
    });

    $("#btn-before").click(function(){
        $("img").before("<b>Saqib's </b>");
    });
    $("#btn-after").click(function(){
        $("img").after("<b> Aminul</b>");
    });
});