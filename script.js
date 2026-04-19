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