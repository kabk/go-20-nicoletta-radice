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

$(function() {
    // Change this selector to find whatever your 'boxes' are
  var top = $(".panel-container");
    // Set up click handlers for each box
    top.click(function() {
        var el = $(this), // The box that was clicked
            max = 0;
        // Find the highest z-index
        top.each(function() {
            // Find the current z-index value
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });

        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max + 10 );
    });
});

$('#triggervideo').click(function(){
  $('video').trigger('play');
})
