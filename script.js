hljs.initHighlightingOnLoad();


$('.human').hide();
$('.robot pre').click(function(){
    $('.robot').hide();
    $('.human').show();
});
$('.human h2').click(function(){
    $('.robot').show();
    $('.human').hide();
});

$(".toggle").slideUp();
$(".trigger").click(function(){
    $(this).next(".toggle").slideToggle("slow");
  });


//   $(".sliding-panel").click(function(){
//     if ( $(this).hasClass("isOpen") ) {
//       $(this).animate({
//         width: '20px'
//       }),
//       $(".circle").animate({
//         marginLeft: '0vw'
//       });
//     } else {
//       $(this).animate({
//         width: '80%'
//       }),
//       $(".circle").animate({
//         marginLeft: '75vw'
//       });
//     }
//     $(this).toggleClass("isOpen");
// });



function actionLeft() {
  if ( $("#left").hasClass("isOpen") ) {
        $("#left").animate({
          marginLeft: '0vw'
        }),
        $("#left-door").animate({
            width: '20px'
        });
      } else {
        $("#left").animate({
          marginLeft: '75vw'
        }),
        $("#left-door").animate({
            width: '80%'
        });
      }
      $(this).toggleClass("isOpen");
}

function actionRight() {
    if ( $("#right").hasClass("isOpen") ) {
      $("#right").animate({
        left: '88%'
      }),
      $("#right-door").animate({
          width: '20px'
      });
    } else {
      $("#right").animate({
        left: '13vw'
      }),
      $("#right-door").animate({
          width: '80%'
      });
    }
    $("#right").toggleClass("isOpen");
}

$(".swipable").on("swipe", actionLeft);
$(".clickable").on("click", actionLeft);

$(".swipable2").on("swipe", actionRight);
$(".clickable2").on("click", actionRight);

//   $("#left").click(function(){
//     if ( $(this).hasClass("isOpen") ) {
//       $(this).animate({
//         marginLeft: '0vw'
//       }),
//       $("#left-door").animate({
//           width: '20px'
//       });
//     } else {
//       $(this).animate({
//         marginLeft: '75vw'
//       }),
//       $("#left-door").animate({
//           width: '80%'
//       });
//     }
//     $(this).toggleClass("isOpen");
// });
//
//
// $("#right").click(function(){
//   if ( $(this).hasClass("isOpen") ) {
//     $(this).animate({
//       left: '85%'
//     }),
//     $("#right-door").animate({
//         width: '20px'
//     });
//   } else {
//     $(this).animate({
//       left: '10vw'
//     }),
//     $("#right-door").animate({
//         width: '80%'
//     });
//   }
//   $(this).toggleClass("isOpen");
// });

$('#triggervideo').click(function(){
  $('video').trigger('play');
})
