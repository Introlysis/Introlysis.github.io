$(document).ready(function() {
  //variables
  var currentPage;
  
  function getXDeg(page) {
    if (page=="5") {
      return -90;
    }
    else if (page=="6") {
      return 90;
    }
    else {
      return 0;
    }
  }
  
  function getYDeg(page) {
    if (page=="2") {
      return 180;
    }
    else if (page=="3") {
      return 90;
    }
    else if (page=="4") {
      return -90;
    }
    else {
      return 0;
    }
  }
  
  function getSide(id) {
    $(".cube").css("transform","rotateX(" + getXDeg(id) + "deg) rotateY(" + getYDeg(id) + "deg)");
  }
  
  function expandPage(elem) {
    $(".cube-item").hide();
    $("section[data-page='" + elem.data("page") + "']").addClass("active-page");
  }
  
  function slideToSide(elem) {
    $("nav > button").addClass("menu-reset");
    $(".display-spin").css("animation-iteration-count",0);
    $(".shadow-shrink").css("animation-iteration-count",0);
    $(".cube").css("transform","rotateX(0deg)");
    
    //different animation if touched cube side instead of button
    if (elem.hasClass("cube-face")) {
      getSide(elem.data("page"));
      setTimeout(expandPage,500,elem);
    }
    else {
      setTimeout(getSide,250,elem.data("page"));
      setTimeout(expandPage,750,elem);
    }
    
    
  }
  
  //click a nav button
  $("nav > button").click(function() {
    slideToSide($(this));
  });
  
  //click a cube face
  $(".cube-face").click(function() {
    slideToSide($(this));
  });
  
  //back button logic
  $("section > button").click(function(){
    $(this).parent().removeClass("active-page");
    $(".cube-item").show();
    $("nav > .ice-button").removeClass("menu-reset");
    $(".display-spin").css("animation-iteration-count","infinite");
    $(".shadow-shrink").css("animation-iteration-count","infinite");
    $(".cube").css("transform","rotateX(-30deg)");
  });
});
