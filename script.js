// ========= MOBILE MENU TOGGLE WITH ANIMATION =========
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const toggleIcon = mobileToggle.querySelector('i');

    function closeMenu() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
        document.body.style.overflow = '';
    }

    function openMenu() {
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    }

    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuOverlay.addEventListener('click', closeMenu);

    // Close menu on link click
    document.querySelectorAll('.nav-link, .cta-button').forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            }
            // Smooth scroll
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ========= HEADER SCROLL EFFECT (SHRINK) =========
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // ========= ACTIVE LINK HIGHLIGHT ON SCROLL =========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);
            if (href === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 980 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Scroll indicator click
    document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    });
        // ========= TYPING ANIMATION =========
    const words = ["UI/UX Design", "Web Development", "Brand Identity", "Motion Design", "Creative Coding"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedSpan = document.getElementById("typedText");

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 300);
            return;
        }

        const speed = isDeleting ? 60 : 120;
        setTimeout(typeEffect, speed);
    }

    // Start typing animation when page loads
    window.addEventListener('load', () => {
        setTimeout(typeEffect, 500);
    });

    // ========= PARALLAX EFFECT ON SCROLL (optional) =========
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const shapes = document.querySelectorAll('.bg-shape');
        shapes.forEach((shape, index) => {
            const speed = 0.05;
            shape.style.transform = `translateY(${scrolled * speed * (index + 1)}px)`;
        });
        
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            profileImg.style.transform = `translateY(${scrolled * 0.03}px)`;
        }
    });

    // ========= SMOOTH SCROLL FOR BUTTONS =========
    document.querySelectorAll('.btn, .scroll-down, .social-icon').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });

    // Add hover effect for typing container
    const typingContainer = document.querySelector('.typing-container');
    if (typingContainer) {
        typingContainer.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.typed-cursor');
            if (cursor) {
                cursor.style.animation = 'blink 0.4s infinite';
            }
        });
    }
       // ========= SCROLL REVEAL ANIMATION =========
    const animateElements = document.querySelectorAll('.stat-item, .skill-tag, .about-title, .about-description, .about-btn, .image-card, .exp-badge');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animateElements.forEach(el => {
        // Reset animation on scroll
        if (el.classList.contains('stat-item')) {
            el.style.animation = 'fadeInUp 0.6s ease forwards';
            el.style.animationPlayState = 'paused';
        }
        if (el.classList.contains('skill-tag')) {
            el.style.animation = 'fadeInScale 0.5s ease forwards';
            el.style.animationPlayState = 'paused';
        }
        observer.observe(el);
    });

    // Trigger initial check
    setTimeout(() => {
        observer.observe(document.querySelector('.about-section'));
    }, 100);

    // Parallax effect on blur elements
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const blurs = document.querySelectorAll('.about-blur');
        blurs.forEach((blur, index) => {
            blur.style.transform = `translateY(${scrolled * 0.05 * (index + 1)}px)`;
        });
    });

    // Add hover effect for stats counter (optional visual)
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.innerText;
        stat.setAttribute('data-target', finalValue);
    });
        // ========= PROGRESS BAR ANIMATION ON SCROLL =========
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (width) {
                bar.style.width = width + '%';
            }
        });
    }

    function resetProgressBars() {
        progressBars.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    // Intersection Observer for skills section
    const skillsSection = document.querySelector('.skills-section');
    let animated = false;

    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateProgressBars();
            } else if (!entry.isIntersecting) {
                // Reset when leaving (optional - for re-animation)
                animated = false;
                resetProgressBars();
            }
        });
    }, { threshold: 0.3 });

    observer1.observe(skillsSection);

    // Also animate cards on scroll reveal
    const cards = document.querySelectorAll('.skill-card, .tool-item');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        cardObserver.observe(card);
    });

    // Parallax effect on floating orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const orbs = document.querySelectorAll('.floating-orb');
        orbs.forEach((orb, index) => {
            orb.style.transform = `translateY(${scrolled * 0.05 * (index + 1)}px)`;
        });
    });

    // Add hover effect for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const fill = item.querySelector('.progress-fill');
            if (fill) {
                const width = fill.getAttribute('data-width');
                fill.style.transition = 'width 0.3s ease';
                fill.style.width = width + '%';
                setTimeout(() => {
                    fill.style.transition = 'width 1.2s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
                }, 300);
            }
        });
    });
       // ========= CREATE FLOATING PARTICLES =========
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = 12 + Math.random() * 10 + 's';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.width = (2 + Math.random() * 4) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }
    createParticles();

    // ========= FILTER FUNCTIONALITY =========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter projects with animation
            projects.forEach((project, index) => {
                const category = project.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    project.style.opacity = '0';
                    project.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========= SCROLL REVEAL ANIMATION =========
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = 'all 0.5s ease';
        observer2.observe(card);
    });

    // Parallax effect on background lines
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const lines = document.querySelectorAll('.line');
        lines.forEach((line, index) => {
            line.style.transform = `translateY(${scrolled * 0.1 * (index + 1)}px)`;
        });
    });

    // Hover effect for project cards - additional animation
    const cards1 = document.querySelectorAll('.project-card');
    cards1.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
    // ========= CREATE FLOATING DOTS =========
    function createFloatingDots() {
        const container = document.getElementById('floatingDots');
        if (!container) return;
        
        for (let i = 0; i < 40; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.left = Math.random() * 100 + '%';
            dot.style.animationDuration = 8 + Math.random() * 12 + 's';
            dot.style.animationDelay = Math.random() * 10 + 's';
            dot.style.width = (3 + Math.random() * 5) + 'px';
            dot.style.height = dot.style.width;
            container.appendChild(dot);
        }
    }
    createFloatingDots();

    // ========= SCROLL REVEAL ANIMATION =========
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillBadges = document.querySelectorAll('.skill-badge');
    const columns = document.querySelectorAll('.resume-column');

    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-15px)';
        item.style.transition = 'all 0.5s ease';
        observer3.observe(item);
    });

    // Parallax effect on waves
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const waves = document.querySelectorAll('.wave');
        waves.forEach((wave, index) => {
            wave.style.transform = `translateX(${scrolled * 0.05 * (index + 1)}px)`;
        });
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.style.transform = `translateY(${scrolled * 0.02 * (index % 3)}px)`;
        });
    });

    // Animate skill badges on scroll
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInScale 0.5s ease forwards';
            }
        });
    }, { threshold: 0.1 });

    skillBadges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.animation = 'none';
        skillObserver.observe(badge);
    });

    // Add hover ripple effect to timeline items
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            if (dot) {
                dot.style.animation = 'none';
                setTimeout(() => {
                    dot.style.animation = 'pulseDot 2s infinite';
                }, 10);
            }
        });
    });

    // Download button click simulation
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('✨ Resume download started! (Demo simulation)');
        });
    }
     // ========= CREATE FLOATING PARTICLES =========
    function createParticles() {
        const container = document.getElementById('bgParticles');
        if (!container) return;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = 8 + Math.random() * 15 + 's';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.width = (2 + Math.random() * 5) + 'px';
            particle.style.height = particle.style.width;
            container.appendChild(particle);
        }
    }
    createParticles();

     