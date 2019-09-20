$(document).ready(function() {
  //toggler btn
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
    // THIS ADDS ANIMATION TO THE HAMBURGER//
    //navbar toggler small scr //
  });
  //stickey navbar less padding//
  $(window).scroll(function() {
    let postion = $(this).scrollTop();

    /* BELOW if the cusor postion is less than or equal to 718 add fixed-top which is a BOOTSTRAP class otherwise remove the fixed top */
    if (postion >= 718) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  // SMOOTH SCROLL//
  /* THIS SAYS DON'T DO THE DEFAULT ACTION WHEN CLICKED
     GIVE THE 'HREF' OF THE LINK WHICH IS THE TARGET OF THE LINK  */
  $(".nav-item a,.header-link,#back-to-top").click(function(link) {
    link.preventDefault();

    /* THIS STANDS FOR WHAT EVER LINK "TARGET"
      HAS BEEN ACTIVATED */
    let target = $(this).attr("href");

    /*BELOW THIS MEANS TO STOP THE ANIMATION
    THAT WAS PREVIOUSLY GIVEN THEN DO THE NEXT */

    $("html, body")
      .stop()
      .animate(
        {
          /* TAKE 3 SECONDS TO SCROLL TO THE TOP OF THE TARGET AND LEAVE SPACE FOR NAVBAR */
          scrollTop: $(target).offset().top - 25
        },
        3000
      );
  });

  // BACK TO TOP //
  $(window).scroll(function() {
    let postion = $(this).scrollTop();

    /* BELOW if the cusor postion is less than or equal to 718
    add scrollTop ID otherwise remove the scrollTop ID
    on right side of widow */
    if (postion >= 718) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });

  //ripples//
  $("#header, .info").ripples({
    // dropRadius: 15,
    // perturbance: 1
    // resolution: 700
  });
  //magnific popup//
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",

    gallery: {
      enabled: true
    }
    // other options
  });
});
