// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
const progressBar = document.getElementById('scrollProgress');


// ============================================================
// HAMBURGER MENU
// ============================================================
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', open);
  });
}

function closeMobileNav() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  hamburger && hamburger.classList.remove('open');
  document.body.style.overflow = '';
}


// ============================================================
// ACTIVE NAV + SCROLL EVENTS
// ============================================================
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  // ===== Progress Bar =====
  if (progressBar) {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = pct + '%';
  }

  // ===== Active Section =====
  let current = '';

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      current = section.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });

  // ===== Navbar Shadow =====
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 30px rgba(0,0,0,0.4)'
      : 'none';
  }

}, { passive: true });


// ============================================================
// GLASS CARD — SCROLL REVEAL
// ============================================================
const CARD_OPEN_MS = 800;

const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add('in-view');

      setTimeout(() => {
        entry.target.classList.add('content-ready');
      }, CARD_OPEN_MS);

      observer.unobserve(entry.target); // run once only
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -20% 0px"
});

document.querySelectorAll('.glass-card').forEach(el => cardObserver.observe(el));


// ============================================================
// SERVICE CARDS — SCROLL REVEAL
// ============================================================
const cardListObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -20% 0px"
});

document.querySelectorAll('.service-card').forEach(el => cardListObserver.observe(el));


// ============================================================
// FOOTER — SCROLL REVEAL
// ============================================================
const footerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -20% 0px"
});

const footer = document.querySelector('.site-footer');
if (footer) footerObserver.observe(footer);


// ============================================================
// HOME CARD — SHOW ONLY HOME ON LOAD
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const homeCard = document.querySelector('.home-card');
  if (homeCard) {
    setTimeout(() => {
      homeCard.classList.add('in-view');
      setTimeout(() => homeCard.classList.add('content-ready'), CARD_OPEN_MS);
    }, 120);
  }
});


// ============================================================
// FALLBACK (IMPORTANT — prevents blank sections)
// ============================================================
window.addEventListener('scroll', () => {
  document.querySelectorAll('.glass-card').forEach(el => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add('in-view');
      setTimeout(() => el.classList.add('content-ready'), 300);
    }
  });
});


// ============================================================
// FORM → WHATSAPP
// ============================================================
