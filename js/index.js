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

  /*********view more********* */
  $(document).ready(function(){
    $("#team-section .card").slice(0, 4).fadeIn();
    $("#viewall").click(function(){
        $("#team-section .card").slice(0, 10).fadeIn();
        $(this).fadeOut();
    });
  });