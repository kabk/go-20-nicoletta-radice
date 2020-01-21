// highlight js
hljs.initHighlightingOnLoad();

// human and robot switch
$('.human').hide();
$('.robot pre').click(function() {
  $('.robot').hide();
  $('.human').show();
});
$('.human button').click(function() {
  $('.robot').show();
  $('.human').hide();
});

//trigger and toggle
$(".toggle").slideUp();
$(".trigger").click(function() {
  $(this).next(".toggle").slideToggle("slow");
});

//sliding panels
function actionLeft() {
  if ($("#left").hasClass("isOpen")) {
    $("#left").animate({
        marginLeft: '0.5vw'
      }),
      $("#left-door").animate({
        width: '20px'
      });
  } else {
    $("#left").animate({
        marginLeft: '75.5vw'
      }),
      $("#left-door").animate({
        width: '80vw'
      });
  }
  $(this).toggleClass("isOpen");
}


function actionRight() {
  if ($("#right").hasClass("isOpen")) {
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
        width: '80vw'
      });
  }
  $("#right").toggleClass("isOpen");
}

//mobile swipe and click
// $(".swipable").on("swipe", actionLeft);
$(".clickable").on("click", actionLeft);

// $(".swipable2").on("swipe", actionRight);
$(".clickable2").on("click", actionRight);

//change z-index to panels because there was a bug in which you would open them both and get stuck
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
      var z = parseInt($(this).css("z-index"), 10);
      // Keep either the current max, or the current z-index, whichever is higher
      max = Math.max(max, z);
    });

    // Set the box that was clicked to the highest z-index plus one
    el.css("z-index", max + 10);
  });
});
//video plays when you click on the trigger
$('#triggervideo').click(function() {
  $('video').trigger('play');
})

//image zoom on click
$(".image").click(function() {
  $(this).toggleClass('large')
});
