
  function hideFirstScreen(){
    // document.getElementById('screen_one').style.display = "none";
    $("#screen_one").fadeOut();
  }
  setTimeout("hideFirstScreen()", 2000);
  function showSecondScreen(){
    // document.getElementById('screen_two').style.display = "block";
    $("#screen_two").fadeIn();
    $("#splLogo").fadeIn(2000);
  }
  setTimeout("showSecondScreen()", 2000);
  if ($(window).width() > 1900) {
    function animateLogo(){
      $('#splLogo').animate(
          {
           left: '850px',
           top: '430px',
          },
          1000,
        );
        
    }
    setTimeout("animateLogo()", 3000);

 }
 else if($(window).width() > 1000){
  function animateLogo(){
    $('#splLogo').animate(
        {
         left: '600px',
         top: '235px',
        },
        1000,
      );
      
  }
  setTimeout("animateLogo()", 3000);
 }
 else if($(window).width() > 370){
  function animateLogo(){
    $('#splLogo').animate(
        {
         left: '140px',
         top: '360px',
        },
        1000,
      );
      
  }
  setTimeout("animateLogo()", 3000);
  function slideLogo(){
    $("#hide_r").fadeOut();
    $("#hide_txt").fadeOut();
    // document.getElementById('hide_r').style.display = 'none';
    // document.getElementById('hide_txt').style.display = 'none';
    $('.sliding-logo').animate(
        {
         left: '5px',
         top: '2px',
        },
        1000,
      );
}
setTimeout("slideLogo()", 6000);
 }
 else{
  function animateLogo(){
    $('#splLogo').animate(
        {
         left: '140px',
         top: '300px',
        },
        1000,
      );
      
  }
  setTimeout("animateLogo()", 3000);
  function slideLogo(){
    $("#hide_r").fadeOut();
    $("#hide_txt").fadeOut();

    // document.getElementById('hide_r').style.display = 'none';
    // document.getElementById('hide_txt').style.display = 'none';
    $('.sliding-logo').animate(
        {
         left: '5px',
         top: '2px',
        },
        1000,
      );
}
setTimeout("slideLogo()", 6000);
  
 }
  function hideSecondScreen(){
     $("#screen_two").fadeOut();
    $("#screen_three").fadeIn();
    // document.getElementById('screen_two').style.display = "none";
    // document.getElementById('screen_three').style.display = "block";
  }
  setTimeout("hideSecondScreen()", 4000);
  $('#screen_two').delay(3000).fadeOut(1000);
function slideLogo(){
  $("#hide_r").fadeOut();
  $("#hide_txt").fadeOut();
    // document.getElementById('hide_r').style.display = 'none';
    // document.getElementById('hide_txt').style.display = 'none';
    $('.sliding-logo').animate(
        {
         left: '135px',
         top: '20px',
        },
        1000,
      );
}
setTimeout("slideLogo()", 6000);
 function showMainPage(){
  $("#screen_three").fadeOut();
  $("#main_screen").fadeIn();
  // document.getElementById('screen_three').style.display = "none";
  // document.getElementById('main_screen').style.display = "block";
 }
 setTimeout('showMainPage()', 6800);
 $(document).ready(function() {
  $('a[data-toggle="formtab"]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      },600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});
  $(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + 150;
// Assign active class to tab links while scolling
  $('.main-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
                      $('.nav-link a').removeClass('active');
          $('.nav-link a').eq(i).addClass('active');
      }
             
  });
  // }

}).scroll();
//show and hide contact form and thankyou message
      $(document).ready(function(){
        $("#send-message").click(function(event){
          event.preventDefault();
          $("#contact-form").hide();
          $("#contact-message").show();
        });
      });