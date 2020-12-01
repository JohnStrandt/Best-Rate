
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;

    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;

    navLinks.classList.toggle('open');
    links.forEach(link => {
      link.classList.toggle('fade');
    });
  }

});


