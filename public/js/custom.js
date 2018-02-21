$(document).ready(function () {
  
    particlesJS.load('particles', '/assets/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
        
    // init Masonry
    var $grid = $('.grid').masonry({
      // options...
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-item',
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });    
        
        
    //dynamic navbar
    $(window).scroll(function(){
        var wscroll = $(document).scrollTop();
        
        if(wscroll > 600) {
            $('#navbar').slideDown();
        } else {
            $('#navbar').fadeOut("slow", "linear");
        }
    });
    
    // zoom transition
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
    
    // shift up skill transition
    $('.category').hover(function() {
        $(this).addClass('shiftup');
    }, function() {
        $(this).removeClass("shiftup");
    });
      
    // Scroll transition to anchor
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
      
      // change hero landing
      var url = window.location.pathname;
      if(url === "/"){
        $("#landing").addClass("landing-home");
        // $("#blurb").css("top", "55vh");
        $(".main").addClass("active");
      } else if(url === "/capabilities"){
        $("#landing").addClass("landing-capabilities");
        $("h1").text("Capabilities");
        $("h3").text("The key is in the code");
        $(".capabilities").addClass("active");
        
      } else if(url === "/work"){
        $("#landing").addClass("landing-work");
        $("h1").text("Work");
        $("h3").text("It speaks for itself");
        $(".work").addClass("active");
      } else if(url === "/about"){
        $("#landing").addClass("landing-about");
        $("h1").text("About");
        $("h3").text("Hello, my name is David and I specialize in web design and front end development.");
        $(".about").addClass("active");
      } else if(url === "/contact"){
        $("#landing").addClass("landing-contact");
        $("h1").text("Contact Me");
        $("h3").text("You can find my contact information below");
        $(".contact").addClass("active");
        $(".cta").hide();
      }
      
      // hover on item
      $(".hover").hover(function(){
        
        if($(this).hasClass("home") || $(this).hasClass("scroll-btn")){
          $(this).fadeTo(200, 0.5);
        } else {
          $(this).fadeTo(200, 0.2);
        }
      }, function(){
        $(this).fadeTo(50, "1");
      });
      
      
      // lets talk button
      $(".lt-side").hide();
      $(".lets-talk").hover(function(){
        
        $(".lt-side").show("fast","swing");
      }, function(){
        $(".lt-side").hide("fast");
      });
        
});


