$(document).ready(function(){
  $(".animation-box").click(function(e){
    var mid = 12.5 //radius of ball
    var rt = $(this).outerWidth();
    var xPos = e.pageX - $(this).offset().left - mid; //x relative to container
    
    //keep ball within width
    if (xPos < mid) {xPos=0;}
    if (xPos > (rt-25)) {xPos=rt-25;}
    
    var yPos = e.pageY - $(this).offset().top - mid; //y relative to container
    
    //otherwise ball falls upwards!
    if (yPos > 175) {yPos = 175;}
    
    if (!$(".animation-box .ball").hasClass("bouncing")) {
      $(".animation-box .ball").addClass("bouncing");
    }
    
    //decrease duration by ratio of starting height to total height
    var ratio = (200-yPos)/200;
    initialDuration = 0.5;
    var duration = initialDuration * ratio;
    
    $(".animation-box .ball").css({"left":xPos,"top":yPos,"animation-duration":duration + "s"});
  });
});
