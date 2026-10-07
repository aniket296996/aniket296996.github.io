(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const storedTheme = localStorage.getItem('aniket-theme');
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme) {
    root.dataset.theme = storedTheme;
  } else if (preferredDark) {
    root.dataset.theme = 'dark';
  }

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('aniket-theme', next);
  });

  const accordions = [...document.querySelectorAll('[data-accordion]')];
  const setAccordion = (item, open) => {
    const button = item.querySelector('.project-summary');
    const panel = item.querySelector('.project-detail');
    button.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };

  accordions.forEach(item => {
    const button = item.querySelector('.project-summary');
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      setAccordion(item, open);
    });
  });

  const openAll = document.querySelector('[data-open-all]');
  let allOpen = false;
  openAll?.addEventListener('click', () => {
    allOpen = !allOpen;
    accordions.forEach(item => setAccordion(item, allOpen));
    openAll.innerHTML = allOpen ? 'Fold all <span aria-hidden="true">↑</span>' : 'Open all <span aria-hidden="true">↓</span>';
  });

  const copyButton = document.querySelector('[data-copy-email]');
  const toast = document.querySelector('.toast');
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('aniket296996@gmail.com');
      toast.classList.add('show');
      window.setTimeout(() => toast.classList.remove('show'), 1800);
    } catch {
      window.location.href = 'mailto:aniket296996@gmail.com';
    }
  });

  // Replace these two placeholders with your real profile URLs.
  const socialLinks = {
    linkedin: '',
    github: ''
  };
  const linkedin = document.querySelector('[data-linkedin]');
  const github = document.querySelector('[data-github]');
  if (socialLinks.linkedin) {
    linkedin.hidden = false;
    linkedin.href = socialLinks.linkedin;
    linkedin.classList.remove('placeholder-link');
    linkedin.querySelector('strong').textContent = 'View profile';
  }
  if (socialLinks.github) {
    github.hidden = false;
    github.href = socialLinks.github;
    github.classList.remove('placeholder-link');
    github.querySelector('strong').textContent = 'View projects';
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
