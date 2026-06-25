// =========================================================
// SOMOS PUENTE — interacciones del sitio
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menú móvil ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cierra el menú al elegir una sección (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Resaltar sección activa en el nav (scroll-spy) ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Formulario de contacto (demo sin backend) ---------- */
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        feedback.textContent = 'Revisá los campos: faltan datos obligatorios.';
        feedback.style.color = '#d8491d';
        return;
      }

      const name = form.querySelector('#name').value.trim();
      feedback.textContent = `¡Gracias, ${name}! Recibimos tu mensaje y te vamos a responder a la brevedad.`;
      feedback.style.color = '#68640d';
      form.reset();

      // NOTA PARA QUIEN IMPLEMENTE EL SITIO:
      // Este formulario es una demostración visual. Para que envíe
      // mensajes reales hay que conectarlo a un backend o a un servicio
      // como Formspree, EmailJS o Netlify Forms.
    });
  }

});
