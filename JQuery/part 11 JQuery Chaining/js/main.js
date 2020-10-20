$(document).ready(function(){

    $('button').click(function(){
        $(".saqib").css("background", "green")
        .slideUp(700)
        .slideDown(700)
        .hide(1000)
        .show(1000);
    });
});