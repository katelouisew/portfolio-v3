/** Collapse navigation on scroll **/
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

/** Smooth page scrolling functionality **/
$(document).ready(function() {
  // called when user clicks page-scroll link
  $("a.page-scroll").bind('click', function(event) {
    var $anchor = $(this);
    // create easing animation for scroll functionality
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 1500, "easeInOutExpo");
    event.preventDefault();
  });
});

/** Contact form email functionality **/
$(document).ready(function() {
  var name,email,message;
  $("#send-btn").click(function() { 
    $("#form_loading").show();
    name = $("#inputName").val();
    email = $("#inputEmail").val();
    message = $("#inputMessage").val();
    // send the ajax request
    $.get( "/send", { name: name, email: email, message: message })
      .done(function( data ) {
        $("#form_loading").hide();
        $("#form_feedback").show();
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputMessage').val('');
      })
      .fail(function() {
        alert("Sorry, there were a problem. Try again later");
      });
    });
});
