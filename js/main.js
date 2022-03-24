
$( ".menu" ).on('click touchstart', function(e) {
    // prevent default anchor click 
    e.preventDefault();
    $(".overlay").toggleClass("overlay-open");
    $("#hamburger-icon").toggleClass("hamburger-open");
    $(".nav-switch").slideToggle(500);
});