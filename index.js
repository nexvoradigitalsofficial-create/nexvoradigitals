
    // Active nav on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
      // Sticky nav shadow
      document.querySelector('.site-nav').style.boxShadow =
        window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
    });

    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.glass-card, .service-card').forEach(el => observer.observe(el));

    // Form submit
   
