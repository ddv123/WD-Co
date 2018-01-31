$(document).ready(function () {
  //your code here
 
    $(window).scroll(function(){
        var wscroll = $(document).scrollTop();
        
        if(wscroll > 100) {
            $('#navbar').addClass("fixed-top").slideDown();
        } else {
            $('#navbar').fadeOut("slow", "linear");
        }
    });
  
    
    
});



