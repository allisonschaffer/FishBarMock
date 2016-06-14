$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.hero').css('height', windowHeight);
  };

  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});

$(window).scroll(function () {
    winHeight = $(window).height();
    if ($(window).scrollTop() > winHeight) {
        $('.navbar').addClass('navbar-scrolled');
        $('.eat, .drink, .about, .contact, footer').addClass('body-scrolled');
    }else{
        $('.navbar').removeClass('navbar-scrolled');
        $('.eat, .drink, .about, .contact, footer').removeClass('body-scrolled');
    }   
});