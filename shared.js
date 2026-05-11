// ── TOADAL PERFORMANCE v2 — Shared JS ──

const LOGO_SVG = `<svg width="28" height="28" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="30" cy="38" rx="14" ry="11" fill="#1A5A38"/>
  <ellipse cx="30" cy="36" rx="12" ry="9.5" fill="#2A8A55"/>
  <circle cx="23" cy="28" r="6" fill="#2A8A55" stroke="#1A5A38" stroke-width=".8"/>
  <circle cx="37" cy="28" r="6" fill="#2A8A55" stroke="#1A5A38" stroke-width=".8"/>
  <circle cx="23" cy="27" r="3.5" fill="#0A1810"/><circle cx="37" cy="27" r="3.5" fill="#0A1810"/>
  <circle cx="24" cy="26" r="1.2" fill="#fff"/><circle cx="38" cy="26" r="1.2" fill="#fff"/>
  <path d="M19.5 23.5 Q23 21.5 26.5 23.5" stroke="#0F3A22" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <path d="M33.5 23.5 Q37 21.5 40.5 23.5" stroke="#0F3A22" stroke-width="1.2" fill="none" stroke-linecap="round"/>
  <path d="M9 30 Q5 27 4 23" stroke="#1A5A38" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M51 30 Q55 27 56 23" stroke="#1A5A38" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <rect x="1" y="20" width="2.5" height="7" rx="1.25" fill="#C9A84C"/>
  <rect x="56.5" y="20" width="2.5" height="7" rx="1.25" fill="#C9A84C"/>
  <rect x="3.5" y="23" width="53" height="2" rx="1" fill="#906810"/>
  <path d="M22 48 Q17 54 14 57" stroke="#1A5A38" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M38 48 Q43 54 46 57" stroke="#1A5A38" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</svg>`;

const NAV_ITEMS = [
  {
    label: 'About', href: 'coaches.html',
    dropdown: [
      { section: 'The team', links: [
        { label: 'Our Coaches', href: 'coaches.html', icon: '' },
        { label: 'How It Works', href: 'index.html#difference', icon: '' },
      ]}
    ]
  },
  {
    label: 'Packages', href: 'packages.html',
    dropdown: [
      { section: 'Coaching', links: [
        { label: 'All Packages', href: 'packages.html', icon: '' },
        { label: 'In-Person Training', href: 'packages.html#inperson', icon: '' },
      ]}
    ]
  },
  {
    label: 'Tools', href: 'resources.html',
    dropdown: [
      { section: 'Calculators', links: [
        { label: 'RPE Calculator', href: 'resources.html#rpe', icon: '' },
        { label: 'RMR Calculator', href: 'resources.html#rmr', icon: '' },
        { label: '1RM Calculator', href: 'resources.html#orm', icon: '' },
      ]},
      { section: 'Reference', links: [
        { label: 'Exercise Library', href: 'library.html', icon: '' },
        { label: 'Stretching Library', href: 'stretching.html', icon: '' },
        { label: 'Equipment Guide', href: 'equipment.html', icon: '' },
        { label: 'LI Gym Finder', href: 'resources.html#gyms', icon: '' },
        { label: 'Fitness Glossary', href: 'resources.html#glossary', icon: '' },
      ]}
    ]
  },
  {
    label: 'Community', href: 'community.html',
    dropdown: [
      { section: 'Get involved', links: [
        { label: 'Weekly Challenge', href: 'community.html#challenge', icon: '' },
        { label: 'Workout Archive', href: 'community.html#archive', icon: '' },
      ]}
    ]
  },
];

function buildDropdown(item) {
  if (!item.dropdown) return '';
  const sections = item.dropdown.map(s => `
    <div class="dropdown-section">
      <div class="dropdown-label">${s.section}</div>
      ${s.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
    </div>
  `).join('');
  return `<div class="dropdown">${sections}</div>`;
}

function buildMobileMenu() {
  let html = '';
  NAV_ITEMS.forEach(item => {
    html += `<a href="${item.href}" class="main-link">${item.label}</a>`;
    if (item.dropdown) {
      item.dropdown.forEach(section => {
        html += `<div class="mobile-section-title">${section.section}</div>`;
        section.links.forEach(l => {
          html += `<a href="${l.href}">${l.label}</a>`;
        });
      });
    }
  });
  html += `<a href="apply.html" class="cta-link">→ Apply for Coaching</a>`;
  return html;
}

function injectNav(activePage) {
  const navLinks = NAV_ITEMS.map(item => `
    <li class="nav-item">
      <a href="${item.href}" class="nav-link${activePage === item.label ? ' active' : ''}">
        ${item.label}
        ${item.dropdown ? '<span class="nav-arrow"></span>' : ''}
      </a>
      ${buildDropdown(item)}
    </li>
  `).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="navbar">
      <div class="container nav-inner">
        <a href="index.html" class="nav-logo">
          ${LOGO_SVG}
          <span class="nav-logo-text">TOADAL<span>.</span></span>
        </a>
        <ul class="nav-list">${navLinks}</ul>
        <a href="apply.html" class="btn btn-gold nav-cta">Apply Now</a>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu">${buildMobileMenu()}</div>
    </nav>
  `);

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });

  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
  });
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" style="text-decoration:none">
              <span style="font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:.06em;color:#F5F0E8">TOADAL<span style="color:#C9A84C">.</span></span>
            </a>
            <p>Premium team-based fitness coaching on Long Island & NYC. Multiple coaches. One mission: your results.</p>
            <div class="footer-socials">
              <a href="https://instagram.com/teamtoadal" target="_blank" class="social-btn ig">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
                @teamtoadal
              </a>
              <a href="https://tiktok.com/@teamtoadal" target="_blank" class="social-btn tt">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.33 6.34 6.34 6.34 0 0 0 6.33 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.16 8.16 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/></svg>
                @teamtoadal
              </a>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Site</div>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="packages.html">Packages</a></li>
              <li><a href="coaches.html">Our Coaches</a></li>
              <li><a href="community.html">Community</a></li>
              <li><a href="apply.html">Apply for Coaching</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title">Tools & Resources</div>
            <ul class="footer-links">
              <li><a href="library.html">Exercise Library</a></li>
              <li><a href="stretching.html">Stretching Library</a></li>
              <li><a href="equipment.html">Equipment Guide</a></li>
              <li><a href="resources.html#rpe">RPE Calculator</a></li>
              <li><a href="resources.html#rmr">RMR Calculator</a></li>
              <li><a href="resources.html#orm">1RM Calculator</a></li>
              <li><a href="resources.html#gyms">LI Gym Finder</a></li>
              <li><a href="resources.html#glossary">Fitness Glossary</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Toadal Performance LLC · Long Island, New York · team@toadalperformance.com</p>
          <div class="footer-legal">
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  `);
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}
