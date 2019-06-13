(function(){
  document.addEventListener('DOMContentLoaded', function(){
    // Diagnostic...make sure DOMContentLoaded has fired...
    console.log('OMG the DOM has loaded!');
    
    //links with the "new tab" class open in a new tab
    var links = document.querySelectorAll(".new-tab");
    for (var i = 0; i < links.length; i++) {
      links[i].target = "_blank";
    }
    var bod = document.querySelector("body");
    var navs = document.querySelectorAll("nav a");
    var firstHeader = document.getElementById("first-header");
    if (document.documentElement.clientWidth > 600){
      for (var i = 0; i < navs.length; i++) {
        navs[i].onmouseover = function() {firstHeader.style.setProperty("padding-top","0.8em");};
        navs[i].onmouseout = function() {firstHeader.style.setProperty("padding-top","1em");};
      }
    }
    bod.onresize = function(){
      if (document.documentElement.clientWidth > 600){
        for (var i = 0; i < navs.length; i++) {
          navs[i].onmouseover = function() {firstHeader.style.setProperty("padding-top","0.8em");};
          navs[i].onmouseout = function() {firstHeader.style.setProperty("padding-top","1em");};
        }
      }
      else {
        for (var i = 0; i < navs.length; i++) {
          navs[i].onmouseover = null;
          navs[i].onmouseout = null;
        }
      }
    };
  });
 
})();