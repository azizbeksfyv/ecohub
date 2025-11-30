$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    navText: [
      '<i style="font-size: 30px" class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i style="font-size: 30px" class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  });

  // Navbar scroll effect
  const navbar = document.getElementById('mainNavbar');
  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
