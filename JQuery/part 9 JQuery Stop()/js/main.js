$(document).ready(function(){
  $(".saqib").click(function(){
    $(".lorem").slideDown(1000);
  });

  $("button").click(function(){
    $(".lorem").stop();
  });
});
