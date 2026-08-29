// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ========== ACTIVE LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ========== SEARCH MODAL ==========
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('active');
  document.getElementById('searchInput').focus();
});

closeSearch.addEventListener('click', () => {
  searchModal.classList.remove('active');
});

searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('active');
  }
});

// ========== CUSTOM CURSOR (DESKTOP ONLY) ==========
if (window.innerWidth > 768) {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    cursorFollower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });
  
  // Hover effect on buttons
  const hoverElements = document.querySelectorAll('a, button, .nav-link, .btn-talk');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.style.transform = 'scale(1.5)';
      cursorFollower.style.borderColor = 'var(--accent-2)';
    });
    el.addEventListener('mouseleave', () => {
      cursorFollower.style.transform = 'scale(1)';
      cursorFollower.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    });
  });
}

// ========== CLOSE MENU ON RESIZE ==========
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Smooth scroll for buttons
document.querySelectorAll('.btn-primary, .btn-outline').forEach(button => {
  button.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Parallax effect on scroll (optional)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll('.gradient-orb');
  orbs.forEach((orb, index) => {
    const speed = 0.3 + (index * 0.1);
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Add scroll animation for elements
const observerOptions2 = {
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
}, observerOptions2);

document.querySelectorAll('.hero-content, .hero-visual').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});
// ========== SKILL BARS ANIMATION ON SCROLL ==========
const skillBars1= document.querySelectorAll('.skill-progress');

const observerOptions1= {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const skillObserver1= new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
      skillObserver1.unobserve(bar);
    }
  });
}, observerOptions1);

skillBars1.forEach(bar => {
  skillObserver1.observe(bar);
});

// ========== FADE-IN ANIMATIONS ON SCROLL ==========
const fadeElements1= document.querySelectorAll('.about-visual, .about-info');

const fadeObserver1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translate(0, 0)';
    }
  });
}, { threshold: 0.1 });

fadeElements1.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  fadeObserver1.observe(el);
});

// ========== NUMBER COUNTER FOR ACHIEVEMENTS ==========
const counters = document.querySelectorAll('.achievement-number');

const counterObserver1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.innerText);
      let count = 0;
      const increment = target / 50;
      
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target + '+';
        }
      };
      
      updateCounter();
      counterObserver1.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// ========== TOOL TAGS INTERACTION ==========
const toolTags = document.querySelectorAll('.tool-tag');

toolTags.forEach(tag => {
  tag.addEventListener('click', function() {
    const tool = this.innerText;
    console.log(`Selected tool: ${tool}`);
    // You can add more functionality here
  });
});

// ========== SMOOTH SCROLL FOR BUTTONS ==========
document.querySelectorAll('.btn-contact, .btn-download').forEach(button => {
  button.addEventListener('click', function(e) {
    if (this.classList.contains('btn-contact')) {
      e.preventDefault();
      const target = document.querySelector('#contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========== PARALLAX EFFECT FOR BACKGROUND CIRCLES ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const circles = document.querySelectorAll('.decor-circle');
  
  circles.forEach((circle, index) => {
    const speed = 0.2 + (index * 0.1);
    circle.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
// ========== FILTER FUNCTIONALITY ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.classList.remove('hide');
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// ========== LOAD MORE FUNCTIONALITY ==========
let visibleProjects = 6;
const projectsGrid = document.querySelector('.projects-grid');
const loadMoreBtn = document.querySelector('.btn-view-more');
const allProjects = Array.from(projectCards);

// Initially show only 6 projects
function initializeProjects() {
  allProjects.forEach((project, index) => {
    if (index < visibleProjects) {
      project.classList.remove('hide');
    } else {
      project.classList.add('hide');
    }
  });
}

// Load more projects
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    const hiddenProjects = allProjects.filter(project => project.classList.contains('hide'));
    const toShow = hiddenProjects.slice(0, 3);
    
    toShow.forEach(project => {
      project.classList.remove('hide');
      project.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
    
    // Hide load more button if no more projects
    if (allProjects.filter(p => !p.classList.contains('hide')).length === allProjects.length) {
      loadMoreBtn.style.opacity = '0';
      loadMoreBtn.style.cursor = 'default';
      setTimeout(() => {
        loadMoreBtn.style.display = 'none';
      }, 300);
    }
  });
}

// ========== SCROLL REVEAL ANIMATION ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Observe project cards
projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease-out';
  revealObserver.observe(card);
});

// ========== PARALLAX EFFECT FOR BACKGROUND GLOWS ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const glows = document.querySelectorAll('.work-glow');
  
  glows.forEach((glow, index) => {
    const speed = 0.2 + (index * 0.1);
    glow.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========== HOVER EFFECT FOR CARDS (ADDITIONAL) ==========
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ========== FILTER COUNTER UPDATE (OPTIONAL) ==========
function updateFilterCounts() {
  const categories = {
    all: allProjects.length,
    web: allProjects.filter(p => p.getAttribute('data-category') === 'web').length,
    design: allProjects.filter(p => p.getAttribute('data-category') === 'design').length,
    branding: allProjects.filter(p => p.getAttribute('data-category') === 'branding').length,
    mobile: allProjects.filter(p => p.getAttribute('data-category') === 'mobile').length
  };
  
  filterButtons.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const count = categories[filter];
    if (count !== undefined && !btn.querySelector('.count')) {
      const span = document.createElement('span');
      span.className = 'count';
      span.style.marginLeft = '0.3rem';
      span.style.fontSize = '0.7rem';
      span.style.opacity = '0.7';
      span.innerText = `(${count})`;
      btn.appendChild(span);
    } else if (btn.querySelector('.count')) {
      btn.querySelector('.count').innerText = `(${count})`;
    }
  });
}

// Call after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeProjects();
  updateFilterCounts();
});

// ========== TESTIMONIAL SLIDER (AUTO ROTATE) ==========
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

if (testimonials.length > 1) {
  setInterval(() => {
    testimonials.forEach(t => t.style.display = 'none');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
  }, 5000);
}
// ========== SKILL BARS ANIMATION ON SCROLL ==========
const skillBars = document.querySelectorAll('.skill-progress');

const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.getAttribute('data-width');
      if (width) {
        bar.style.width = width + '%';
      }
      skillObserver.unobserve(bar);
    }
  });
}, observerOptions);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// ========== STAT COUNTER ANIMATION ==========
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const increment = target / 60;
      
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
      counterObserver.unobserve(counter);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(counter => {
  counterObserver.observe(counter);
});

// ========== FADE-IN ANIMATIONS ON SCROLL ==========
const fadeElements = document.querySelectorAll('.resume-block, .timeline-item, .cert-card');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  fadeObserver.observe(el);
});

// Add staggered delays
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.cert-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ========== PARALLAX EFFECT FOR BACKGROUND GLOWS ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const glows = document.querySelectorAll('.resume-glow');
  
  glows.forEach((glow, index) => {
    const speed = 0.2 + (index * 0.1);
    glow.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========== TIMELINE HOVER EFFECT ==========
const timelineItems = document.querySelectorAll('.timeline-content');

timelineItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.parentElement.querySelector('.timeline-dot').style.transform = 'scale(1.3)';
    this.parentElement.querySelector('.timeline-dot').style.background = 'var(--accent-2)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.parentElement.querySelector('.timeline-dot').style.transform = 'scale(1)';
    this.parentElement.querySelector('.timeline-dot').style.background = 'var(--accent-1)';
  });
});

// ========== DOWNLOAD RESUME BUTTON ANIMATION ==========
const downloadBtn = document.querySelector('.btn-download-resume');

if (downloadBtn) {
  downloadBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add ripple effect
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
    
    // Simulate download (replace with actual PDF download)
    console.log('Downloading resume...');
    
    // You can add actual PDF download logic here
    // window.location.href = 'path/to/resume.pdf';
    
    // Or show a toast/notification
    showNotification('Resume download started!');
  });
}

// ========== NOTIFICATION FUNCTION ==========
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--gradient-primary);
    color: white;
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ========== TOOL TAGS INTERACTION ==========
const skillTags = document.querySelectorAll('.skill-tags span');

skillTags.forEach(tag => {
  tag.addEventListener('click', function() {
    const skill = this.innerText;
    console.log(`Selected skill: ${skill}`);
    // You can add more functionality here, like filtering projects by skill
  });
});

// ========== RESUME DATA (For future dynamic loading) ==========
const resumeData = {
  experience: [
    { title: "Senior Product Designer", company: "CreativeStudio", period: "2022 - Present", location: "San Francisco, CA" },
    { title: "UI/UX Designer", company: "DigitalAgency", period: "2019 - 2022", location: "New York, NY" }
  ],
  skills: {
    design: ["Figma", "Adobe XD", "Sketch", "InVision"],
    development: ["HTML/CSS", "JavaScript", "React", "Tailwind"],
    soft: ["Leadership", "Communication", "Problem Solving"]
  }
};

// Log resume data on load
console.log("Resume data loaded:", resumeData);
// ========== TESTIMONIALS SLIDER ==========
const track = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('sliderDots');

let currentIndex = 0;
let cardWidth = 0;
let visibleCards = 0;
let totalCards = 0;

// Get all testimonial cards
const cards = Array.from(document.querySelectorAll('.testimonial-card'));

// Function to update visible cards based on screen width
function updateVisibleCards() {
  const width = window.innerWidth;
  if (width >= 1200) {
    visibleCards = 3;
  } else if (width >= 900) {
    visibleCards = 2;
  } else {
    visibleCards = 1;
  }
  
  cardWidth = cards[0]?.offsetWidth + 32; // including gap
  totalCards = cards.length;
  updateSlider();
  createDots();
}

// Function to update slider position
function updateSlider() {
  if (!track) return;
  const maxIndex = Math.max(0, totalCards - visibleCards);
  currentIndex = Math.min(currentIndex, maxIndex);
  const scrollAmount = currentIndex * cardWidth;
  track.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
  updateDots();
}

// Create navigation dots
function createDots() {
  if (!dotsContainer) return;
  const dotCount = Math.ceil(totalCards / visibleCards);
  dotsContainer.innerHTML = '';
  
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  }
}

// Update active dot
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  const activeIndex = Math.floor(currentIndex);
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === activeIndex);
  });
}

// Next slide
function nextSlide() {
  const maxIndex = Math.max(0, totalCards - visibleCards);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  } else {
    // Loop back to start
    currentIndex = 0;
    updateSlider();
  }
}

// Previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  } else {
    // Loop to end
    currentIndex = Math.max(0, totalCards - visibleCards);
    updateSlider();
  }
}

// Event listeners
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

// Handle scroll event for track (for touch devices)
if (track) {
  track.addEventListener('scroll', () => {
    const scrollPosition = track.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateDots();
    }
  });
}

// ========== AUTO SLIDE (OPTIONAL) ==========
let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (!document.hidden) {
      nextSlide();
    }
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto-slide on desktop only
if (window.innerWidth > 768) {
  startAutoSlide();
  
  // Pause on hover
  const sliderContainer = document.querySelector('.testimonials-slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
  }
}

// Stop auto-slide when page is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopAutoSlide();
  } else if (window.innerWidth > 768) {
    startAutoSlide();
  }
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const fadeElements2 = document.querySelectorAll('.testimonial-card, .rating-summary, .trusted-section');

const fadeObserver2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements2.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  fadeObserver2.observe(el);
});

// Staggered animation for cards
cards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ========== PARALLAX EFFECT FOR BACKGROUND BLOBS ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const blobs = document.querySelectorAll('.bg-blob');
  
  blobs.forEach((blob, index) => {
    const speed = 0.2 + (index * 0.1);
    blob.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========== RESPONSIVE RESIZE HANDLER ==========
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateVisibleCards();
    // Restart auto-slide if needed
    if (window.innerWidth > 768) {
      stopAutoSlide();
      startAutoSlide();
    } else {
      stopAutoSlide();
    }
  }, 250);
});

// ========== CTA BUTTON ANIMATION ==========
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Add ripple effect
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
    
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Contact section not found');
    }
  });
}

// ========== VERIFIED BADGE TOOLTIP ==========
const verifiedBadges = document.querySelectorAll('.verified-badge');
verifiedBadges.forEach(badge => {
  badge.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  badge.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  updateVisibleCards();
  
  // Add touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (track) {
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }
});

// ========== LOGO INTERACTION ==========
const logos = document.querySelectorAll('.logo-item');
logos.forEach(logo => {
  logo.addEventListener('click', () => {
    const company = logo.textContent.trim();
    console.log(`Clicked on ${company} logo`);
    // You can add more functionality here, like redirecting to company page
  });
});

// ========== RATING BARS ANIMATION ==========
const ratingBars = document.querySelectorAll('.bar-fill');
const ratingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
      ratingObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

ratingBars.forEach(bar => {
  ratingObserver.observe(bar);
});

// ========== TESTIMONIAL DATA (For future dynamic loading) ==========
const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Creative Director, StudioX",
    text: "Alex is absolutely brilliant! The attention to detail and creative vision exceeded our expectations.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  // More testimonials can be added here
];

console.log("Testimonials section loaded with", cards.length, "testimonials");
// ========== FAQ ACCORDION ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll('.service-card, .pricing-card, .process-step, .faq-item');

const revealObserver1= new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  revealObserver1.observe(el);
});

// Staggered animations
document.querySelectorAll('.service-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.pricing-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ========== PARALLAX EFFECT FOR BACKGROUND GRADIENTS ==========
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const gradients = document.querySelectorAll('.bg-gradient-1, .bg-gradient-2, .bg-gradient-3');
  
  gradients.forEach((gradient, index) => {
    const speed = 0.2 + (index * 0.1);
    gradient.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========== PRICING BUTTON ANIMATION ==========
const pricingBtns = document.querySelectorAll('.pricing-btn');

pricingBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add ripple effect
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
    
    // Get package info
    const card = this.closest('.pricing-card');
    const packageName = card.querySelector('h4')?.innerText || 'Package';
    console.log(`Selected: ${packageName}`);
    
    // Show notification (optional)
    showNotification(`${packageName} selected! Redirecting to checkout...`);
  });
});

// ========== SERVICE LINK ANIMATION ==========
const serviceLinks = document.querySelectorAll('.service-link');

serviceLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const service = this.closest('.service-card');
    const serviceName = service.querySelector('.service-title')?.innerText;
    console.log(`Interested in: ${serviceName}`);
    showNotification(`Learn more about ${serviceName}`);
  });
});

// ========== NOTIFICATION FUNCTION ==========
function showNotification(message) {
  // Remove existing notification
  const existingNotif = document.querySelector('.service-notification');
  if (existingNotif) existingNotif.remove();
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'service-notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--gradient-primary);
    color: white;
    padding: 12px 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 9999;
    animation: slideIn 0.3s ease-out;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    font-size: 0.85rem;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add notification styles
const notifStyle = document.createElement('style');
notifStyle.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(notifStyle);

// ========== NUMBER COUNTER FOR STATS (If added later) ==========
const animateNumber = (element, target) => {
  let current = 0;
  const increment = target / 50;
  const update = () => {
    current += increment;
    if (current < target) {
      element.innerText = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      element.innerText = target;
    }
  };
  update();
};

// ========== HOVER EFFECT FOR PROCESS STEPS ==========
const processSteps = document.querySelectorAll('.process-step');

processSteps.forEach(step => {
  step.addEventListener('mouseenter', () => {
    step.querySelector('.step-icon')?.classList.add('pulse');
  });
  
  step.addEventListener('mouseleave', () => {
    step.querySelector('.step-icon')?.classList.remove('pulse');
  });
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .pulse {
    animation: pulse 0.3s ease-in-out;
  }
`;
document.head.appendChild(pulseStyle);

// ========== RESPONSIVE TOUCH HANDLER ==========
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  // For future slider implementation
  console.log('Swipe detected');
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log('Services section loaded');
  
  // Add active class to first FAQ item by default (optional)
  // if (faqItems.length > 0) faqItems[0].classList.add('active');
});

// ========== SERVICE DATA (For future dynamic loading) ==========
const servicesData = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered designs that delight users.",
    features: ["User Research", "Wireframing", "Prototyping"]
  },
  // More services can be added
];

console.log("Services section ready with", document.querySelectorAll('.service-card').length, "services");
