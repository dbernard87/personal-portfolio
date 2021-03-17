$(document).ready(function(){
  
  $.scrollify({
    section : ".sectionOne, .sectionTwo, .sectionThree, .sectionFour, .sectionFive",
    interstitialSection : "footer",
    touchScroll: true,
    /*
    sectionName : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
    */
  });
 
  $(window).on("scroll", function() {
     if ($(this).scrollTop() > 100) {
        $("header").css("background","rgba(36, 36, 36, 0.9)");
     }
     else {
        $("header").css("background","transparent");
     }
  });
 
});