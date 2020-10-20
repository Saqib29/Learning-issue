$(document).ready(function(){
  $("button").click(function(){
    // $('div').animate({
    //   // left: '500px',
    //   // width: '+=150px',
    //   // height: '+=150px'
    //
    //   // height: 'toggle'
    //   width: 'toggle'
    // });

    // var saqib = $("div");
    // saqib.animate({height: "400px",width: '300px', opacity: 0.5}, "slow");
    // saqib.animate({width: "400px", opacity: 0.8}, "slow");
    // saqib.animate({height: "100px", opacity: 0.4}, "slow");
    // saqib.animate({height: "100px", width: "100px", opacity: 1}, "slow");


    var saqib = $("div");
    saqib.animate({left: '300px'}, 'slow');
    saqib.animate({width: '300px'}, 'slow');
    saqib.animate({fontSize: '50px'}, 'fast');
  });
});
