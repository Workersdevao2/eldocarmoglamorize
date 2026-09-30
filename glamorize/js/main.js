/**
 * Eldo Carmo Glamorize
 * Menu drawer · Header scroll · Booking → WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuDrawer = document.getElementById('menu-drawer');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuClose = document.getElementById('menu-close');
  const bookingForm = document.getElementById('booking-form');

  const openMenu = () => {
    hamburger?.classList.add('is-active');
    menuDrawer?.classList.add('is-open');
    hamburger?.setAttribute('aria-expanded', 'true');
    menuDrawer?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger?.classList.remove('is-active');
    menuDrawer?.classList.remove('is-open');
    hamburger?.setAttribute('aria-expanded', 'false');
    menuDrawer?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    if (menuDrawer?.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  menuClose?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  menuDrawer?.querySelectorAll('.menu-drawer__link').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  // Service card → pre-fill booking
  document.querySelectorAll('.agendar-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.service-card');
      const service = card?.dataset.service;
      const select = document.getElementById('service');
      if (service && select) {
        select.value = service;
      }
    });
  });

  // Booking form → WhatsApp
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const people = document.getElementById('people')?.value.trim() || '';
    const service = document.getElementById('service')?.value || '';
    const date = document.getElementById('date')?.value || '';
    const time = document.getElementById('time')?.value || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !service || !date || !time) return;

    let text = `Olá! Gostaria de agendar na Glamorize.\n\n`;
    text += `Nome: ${name}\n`;
    if (phone) text += `Telefone: ${phone}\n`;
    if (people) text += `Nº de pessoas: ${people}\n`;
    text += `Serviço: ${service}\n`;
    text += `Data: ${date}\n`;
    text += `Hora: ${time}\n`;
    if (message) text += `\nMensagem: ${message}`;

    window.open(`https://wa.me/244935627443?text=${encodeURIComponent(text)}`, '_blank');
  });

  // Header scroll + announce bar
  const header = document.getElementById('header');
  const announceBar = document.querySelector('.announce-bar');
  const onScrollHeader = () => {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('is-scrolled', y > 40);
      header.classList.toggle('announce-hidden', y > 20);
    }
    if (announceBar) {
      announceBar.classList.toggle('is-hidden', y > 20);
    }
  };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();
});
