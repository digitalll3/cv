// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initScrollAnimations();
    initSkillAnimations();
    initLanguageAnimations();
    initImageUpload();
    initSmoothScrolling();
    initTypingEffect();
    initProjectHoverEffects();
    initProgressBars();
    initThemeToggle();
    initPrintFunction();
});

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger skill animations when skills section is visible
                if (entry.target.classList.contains('skills-section')) {
                    animateSkills();
                }
                
                // Trigger language progress bars when languages section is visible
                if (entry.target.classList.contains('languages-section')) {
                    animateLanguageBars();
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Skill Tags Animation
function initSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
}

function animateSkills() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
}

// Language Progress Bars Animation
function initLanguageAnimations() {
    const progressBars = document.querySelectorAll('.level-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        bar.dataset.targetWidth = width;
    });
}

function animateLanguageBars() {
    const progressBars = document.querySelectorAll('.level-fill');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.targetWidth;
        }, index * 300);
    });
}



// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Typing Effect for Name
function initTypingEffect() {
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    
    let index = 0;
    function typeWriter() {
        if (index < originalText.length) {
            nameElement.textContent += originalText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Project Card Hover Effects
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
}

// Progress Bars Animation
function initProgressBars() {
    const progressBars = document.querySelectorAll('.level-fill');
    
    progressBars.forEach(bar => {
        bar.addEventListener('animationend', function() {
            this.style.boxShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
            setTimeout(() => {
                this.style.boxShadow = '';
            }, 1000);
        });
    });
}

// Theme Toggle (Dark/Light Mode)
function initThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        font-size: 18px;
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
}

// Print Function
function initPrintFunction() {
    // Create print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        top: 80px;
        left: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        font-size: 18px;
    `;
    
    document.body.appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
}

// Contact Item Click Effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('span').textContent;
        
        if (text.includes('@')) {
            // Email
            window.location.href = `mailto:${text}`;
        } else if (text.match(/^\d+$/)) {
            // Phone number
            window.location.href = `tel:${text}`;
        } else if (text.includes('linkedin.com')) {
            // LinkedIn
            window.open(`https://${text}`, '_blank');
        } else if (text.includes('github.com')) {
            // GitHub
            window.open(`https://${text}`, '_blank');
        }
        
        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Scroll to Top Button
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        font-size: 18px;
        opacity: 0;
        transform: translateY(100px);
    `;
    
    document.body.appendChild(scrollButton);
    
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(100px)';
        }
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Add CSS for dark theme
const darkThemeStyles = `
    .dark-theme {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
    }
    
    .dark-theme .header,
    .dark-theme .main-content,
    .dark-theme .footer {
        background: rgba(45, 55, 72, 0.95);
        color: #e2e8f0;
    }
    
    .dark-theme .name {
        color: #e2e8f0;
    }
    
    .dark-theme .title,
    .dark-theme .section-title,
    .dark-theme .project-title,
    .dark-theme .degree,
    .dark-theme .language-name {
        color: #e2e8f0;
    }
    
    .dark-theme .summary-text,
    .dark-theme .project-description,
    .dark-theme .education-details p,
    .dark-theme .project-role {
        color: #cbd5e0;
    }
    
    .dark-theme .contact-item {
        background: rgba(102, 126, 234, 0.2);
    }
    
    .dark-theme .contact-item span {
        color: #e2e8f0;
    }
    
    .dark-theme .skill-category,
    .dark-theme .project-card,
    .dark-theme .education-item,
    .dark-theme .language-item {
        background: rgba(102, 126, 234, 0.1);
        border-color: rgba(102, 126, 234, 0.3);
    }
`;

// Add dark theme styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = darkThemeStyles;
document.head.appendChild(styleSheet);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS animations
const animationStyles = `
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideInFromRight {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeInScale {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .animate-in {
        animation: fadeInScale 0.6s ease-out;
    }
    
    .skill-tag {
        animation: fadeInScale 0.5s ease-out;
        animation-fill-mode: both;
    }
    
    .project-card:nth-child(odd) {
        animation: slideInFromLeft 0.6s ease-out;
    }
    
    .project-card:nth-child(even) {
        animation: slideInFromRight 0.6s ease-out;
    }
`;

const animationStyleSheet = document.createElement('style');
animationStyleSheet.textContent = animationStyles;
document.head.appendChild(animationStyleSheet);
