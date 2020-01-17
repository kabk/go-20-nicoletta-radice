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


  $(".sliding-panel").click(function(){
    if ( $(this).hasClass("isOpen") ) {
      $(this).animate({
        width: '20px'
      });
    } else {
      $(this).animate({
        width: '80%'
      });
    }
    $(this).toggleClass("isOpen");
  });
