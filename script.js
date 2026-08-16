// Scroll se navbar highlight hona
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = '#000';
  } else {
    navbar.style.background = '#0a0a0a';
  }
});

// Sections ka fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Typing effect on hero
const text = "Aspiring Software Developer | MCA Student";
const el = document.querySelector('#hero p');
el.textContent = '';
let i = 0;
function typeWriter() {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();
