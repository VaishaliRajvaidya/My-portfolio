// GSAP animations for intro
gsap.from(".intro-text h1", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".intro-text p", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power2.out",
});

gsap.from(".profile-image", {
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 1,
  ease: "power2.out",
});

// GSAP animations for navbar links
gsap.from(".nav-links li", {
  y: -20,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
  delay: 0.5,
  ease:  "power2.out",

});


// Scroll-based reveal animation (optional, can be extended with ScrollTrigger)
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });
});
document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    // Scroll to the target section                                 

    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Auto-close mobile menu on link click
const mobileNavLink = mobileMenu.querySelector('a');

mobileNavLink.addEventListener('click', () => {
  mobileMenu.classList.remove('show');

  });



