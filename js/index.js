
$(document).ready(function(){
  $(".animation-box").click(function(e){
    var mid = 12.5 //click 
    var rt = $(this).outerWidth();
    var xPos = e.pageX - $(this).offset().left - mid;
    if (xPos < mid) {xPos=0;}
    if (xPos > (rt-25)) {xPos=rt-25;}
    
    var yPos = e.pageY - $(this).offset().top - mid;
    if (yPos > 175) {yPos = 175;}
    
    if (!$(".animation-box .ball").hasClass("bouncing")) {
      $(".animation-box .ball").addClass("bouncing");
    }
    var ratio = (200-yPos)/200;
    initialDuration = 0.5;
    var duration = initialDuration * ratio;
    $(".animation-box .ball").css({"left":xPos,"top":yPos,"animation-duration":duration + "s"});
  });
});
