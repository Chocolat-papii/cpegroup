const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Prefill the quote form with the service the visitor clicked.
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const serviceSelect = document.querySelector('#service');
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

// The form prepares a WhatsApp message; it does not submit data to a server.
const quoteForm = document.querySelector('#quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#fullName').value.trim();
    const service = document.querySelector('#service').value;
    const details = document.querySelector('#message').value.trim();

    const message = `Hello CPE Group, my name is ${name}. I would like to enquire about: ${service}. Details: ${details}`;
    const whatsappUrl = `https://wa.me/27720356162?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
