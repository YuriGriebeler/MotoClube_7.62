let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo - oculta a navbar
    navbar.classList.add('nav-hidden');
  } else {
    // Rolando para cima - mostra a navbar
    navbar.classList.remove('nav-hidden');
  }
  lastScrollTop = scrollTop;
}); 