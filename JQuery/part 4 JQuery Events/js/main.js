$(document).ready(function(){
  // $("p").dblclick(function(){
  //   $(this).hide();
  // });

  // $('p').mouseenter(function(){
  //   $(this).hide();
  // });

  // $('p').mouseenter(function(){
  //   alert('Hi');
  // });

  // $('p').mouseleave(function(){
  //   alert('Hi');
  // });

  // $('p').hover(function(){
  //   alert('Hi');
  // },
  // function(){
  //   alert('Bye');
  // });

  // $('input').focus(function(){
  //   $(this).css("background", "#ccc");
  // });

  // $('p').on("click", function(){
  //   $(this).hide();
  // });

  $('p').on({
    mouseenter: function(){
      $(this).css("background", "red");
    },
    mouseleave: function(){
      $(this).css("background", "white");
      $(this).css("color", "black");
    },
    click: function(){
      $(this).css("background", "blue")
      $(this).css("color", "white");
    }
  });
});
