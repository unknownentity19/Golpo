// === ARMORYX - Main JavaScript ===

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    
    // Toggle clicked item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabGroup = btn.closest('.tabs');
    const target = btn.dataset.tab;
    
    // Update buttons
    tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update content
    tabGroup.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tabGroup.querySelector(`[data-tab-content="${target}"]`).classList.add('active');
  });
});


// Form handling
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const successEl = form.parentElement.querySelector('.form-success');
    if (successEl) {
      form.style.display = 'none';
      successEl.classList.add('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate threat feed (cycle items)
function animateThreatFeed() {
  const feed = document.querySelector('.threat-feed');
  if (!feed) return;
  
  const items = feed.querySelectorAll('.threat-item');
  if (items.length === 0) return;
  
  setInterval(() => {
    const times = ['2s ago', '5s ago', '8s ago', '12s ago', '18s ago', '25s ago', '30s ago'];
    items.forEach((item, i) => {
      const timeEl = item.querySelector('.threat-time');
      if (timeEl && times[i]) {
        timeEl.textContent = times[i];
      }
    });
  }, 5000);
}

animateThreatFeed();

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .stat-card, .feature-card, .blog-card, .compliance-card, .testimonial').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
