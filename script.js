document.addEventListener('DOMContentLoaded', function() {

  // 🔥 헤더 스크롤 효과
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 🔥 갤러리 확대
  const images = document.querySelectorAll('.grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(img => {
    img.onclick = () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    }
  });

  lightbox.onclick = () => {
    lightbox.style.display = 'none';
  };

});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // 👉 화면 중앙 기준으로 판단
    if (window.scrollY >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === "#" + current) {
      link.classList.add('active');
    }
  });
});