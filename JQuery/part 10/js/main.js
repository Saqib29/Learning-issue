$(document).ready(function(){
  // $("button").click(function(){
  //   $('p').hide('slow', function(){
  //     alert("With callback function");
  //   });
  // });

  $("button").click(function(){
    $('p').hide(3000);
    alert("Without callback function!");
  });
});
