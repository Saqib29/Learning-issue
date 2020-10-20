$(document).ready(function(){
  $("button").click(function(){
    // $(".box1").fadeIn();
    // $(".box2").fadeIn('slow');
    // $(".box3").fadeIn(2000);

    // $(".box1").fadeOut();
    // $(".box2").fadeOut('slow');
    // $(".box3").fadeOut(2000);

    // $(".box1").fadeToggle();
    // $(".box2").fadeToggle('slow');
    // $(".box3").fadeToggle(2000);

    $(".box1").fadeTo('slow', 0.3);
    $(".box2").fadeTo('slow', 0.5);
    $(".box3").fadeTo(1000, 0.6);
  });
});
