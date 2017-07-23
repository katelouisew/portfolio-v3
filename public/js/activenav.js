/** Changes navbar styles **/
function whiteNav() {
  $(".navbar").css({"background-color":"#ffffff"});         
  $(".navbar-nav>li>a").addClass("dark");
  $(".name").css({"color":"#2d2d2d"});    
}

/** Add active class to nav links **/
$(document).ready(function() {
  var targetAbout = $("#about").position().top;
  var targetWork = $("#work").position().top;
  var targetContact = $("#contact").position().top;
  var targetFooter = $(".footer").position().top;
  var currentSection = "";
  var $w = $(window).scroll(function() {
    var scrollPos = $w.scrollTop();
    // if user scrolls into 'home' section
    // remove all active link classes and set currentSection to HOME
    if (scrollPos < targetAbout) {
      if (currentSection != "HOME") {
        $("#contact_nav").removeClass("active_link");
        $("#about_nav").removeClass("active_link");
        $("#work_nav").removeClass("active_link");
        $(".navbar").css({"background-color":"#ffc7c7"});
        $(".navbar-nav>li>a").removeClass("dark");
        $(".name").css({"color":"#ffffff"});
        currentSection = "HOME";
      }
      // if user scrolls into 'about' section
      // apply active link class to 'about' and set currentSection to ABOUT
    } else if (scrollPos < targetWork * 0.9) {
      if (currentSection != "ABOUT") {
        $("#about_nav").addClass("active_link");
        $("#work_nav").removeClass("active_link");
        $("#contact_nav").removeClass("active_link");
        whiteNav();
        currentSection = "ABOUT";
      }
      // if user scrolls between 'work' and 'contact' sections
      // apply active link class to 'work' link and remove from other links
    } else if (scrollPos < targetContact * 0.9) {
      if (currentSection != "WORK") {
        $("#work_nav").addClass("active_link");
        $("#about_nav").removeClass("active_link");
        $("#contact_nav").removeClass("active_link");
        whiteNav() 
        currentSection = "WORK";
      }
      // if user scrolls below 'work' sectiom (into 'contact' section)
      // apply active link class to 'contact' link and remove from other links
    } else {
      if (currentSection != "CONTACT") {
        $("#contact_nav").addClass("active_link");
        $("#about_nav").removeClass("active_link");
        $("#work_nav").removeClass("active_link");
        whiteNav()
        currentSection = "CONTACT";     
      }
    } 
  });
});