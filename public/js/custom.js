$(document).ready(function () {
  //your code here
 
    $(window).scroll(function(){
        var wscroll = $(document).scrollTop();
        
        if(wscroll > 300) {
            $('#navbar').slideDown();
        } else {
            $('#navbar').fadeOut("slow", "linear");
        }
    });
  
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
    
    
});



