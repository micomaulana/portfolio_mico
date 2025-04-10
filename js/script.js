// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
  });
  
  // AOS Initialization
  AOS.init({
    duration: 1000,
    once: true
  });
  
  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });
  
  // Theme Toggle
  const toggleTheme = document.getElementById('toggleTheme');
  toggleTheme.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.getAttribute('data-bs-theme') === 'light') {
      html.setAttribute('data-bs-theme', 'dark');
      toggleTheme.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      html.setAttribute('data-bs-theme', 'light');
      toggleTheme.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
  
  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .card').forEach(el => {
    el.addEventListener('mouseover', () => cursor.classList.add('grow'));
    el.addEventListener('mouseout', () => cursor.classList.remove('grow'));
  });
  
  // EmailJS Initialization
  (function () {
    emailjs.init("LJurnnmJOO4nAWhp1"); // Ganti dengan User ID dari EmailJS
  })();
  
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('service_9nu1xo7', 'template_s78nvzi', this)
      .then(() => {
        alert('Pesan berhasil dikirim!');
      }, (error) => {
        alert('Gagal mengirim pesan: ' + error.text);
      });
  });