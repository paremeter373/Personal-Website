document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-link');
  const articles = document.querySelectorAll('article');
  const pathText = document.querySelector('.path-text');
  const prevBtn = document.querySelector('.nav-btn:first-child');
  const nextBtn = document.querySelector('.nav-btn:last-child');

  // Simple array of our pages
  const pages = ['home', 'about', 'resume', 'portfolio', 'contact'];
  let currentPage = 'home';

  // Handle prev/next navigation
  prevBtn.addEventListener('click', () => {
    let index = pages.indexOf(currentPage);
    if (index > 0) {
      window.location.hash = `#${pages[index - 1]}`;
    }
  });

  nextBtn.addEventListener('click', () => {
    let index = pages.indexOf(currentPage);
    if (index < pages.length - 1) {
      window.location.hash = `#${pages[index + 1]}`;
    }
  });

  // Update active section and path
  const updateActiveSection = (hash) => {
    navLinks.forEach(link => link.classList.remove('active'));
    articles.forEach(article => article.classList.remove('active'));

    const currentLink = document.querySelector(`.navbar-link[href="${hash}"]`);
    const currentArticle = document.querySelector(`article${hash}`);
    currentPage = hash.replace('#', '');

    if (currentLink) {
      currentLink.classList.add('active');
      const pageName = currentLink.textContent.trim();
      pathText.textContent = `~/Portfolio/${pageName}`;
    }
    if (currentArticle) currentArticle.classList.add('active');
  };

  // Rest of your existing code...
  if (window.location.hash) {
    updateActiveSection(window.location.hash);
  } else {
    updateActiveSection('#home');
  }

  window.addEventListener('hashchange', () => {
    updateActiveSection(window.location.hash);
  });
});

// Typing effect0
document.addEventListener('DOMContentLoaded', function() {
  const options = {
    strings: ['Software Developer', 'Researcher', 'Photographer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
    cursorChar: '|',
    showCursor: true,
    smartBackspace: true
  };

  const typed = new Typed('.typing', options);
});

// Sidebar toggle
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

sidebarBtn.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});

window.onload = function() {
  const animatedContainer = document.querySelector('.animated-container');
  animatedContainer.style.visibility = 'visible';
};


