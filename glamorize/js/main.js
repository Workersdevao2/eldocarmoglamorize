/**
 * Eldo Carmo Glamorize
 * Navigation + Contact form
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const contactForm = document.getElementById('contact-form');

  // Hamburger
  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  nav?.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      nav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Contact → WhatsApp
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !message) return;

    const text = encodeURIComponent(`Olá! O meu nome é ${name}.\n\n${message}`);
    window.open(`https://wa.me/244935627443?text=${text}`, '_blank');
  });
});
