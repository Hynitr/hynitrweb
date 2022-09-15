$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css({
              "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
             
            });
        }
       
        else{
            $("nav.navbar").css(
                "box-shadow", "none",
                
               
            )}	

       
    })
  });
  /*---scrolling up------*/

  let mybutton = document.getElementById("myBtn");

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }