
var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
var topNavbar = document.getElementById('resize-menu');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  if (prevScrollPos > currentScrollPos) {
    topNavbar.style.top = '0';
    //  topNavbar.style.opacity = '0';
    //   navbar.style.top = '42px';
  } else {
    topNavbar.style.top = '-500rem';
    // navbar.style.top = '0';
  }

  prevScrollPos = currentScrollPos;
});