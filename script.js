
  document.querySelectorAll('.info-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';


// Navbar toggle for mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});

// GSAP navbar animation
gsap.from(".navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power4.out"
});

gsap.from(".profile-image", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 0.2
});

gsap.from(".intro-text", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.4
});

// Toggle info sections
function toggleSection(sectionId) {
  const sections = ["about", "projects", "contact"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (id === sectionId) {
      if (el.style.display !== "block") {
        el.style.display = "block";
        gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      } else {
        gsap.to(el, { opacity: 0, y: 50, duration: 0.5, onComplete: () => (el.style.display = "none") });
      }
    } else {
      el.style.display = "none";
    }
  });
}
