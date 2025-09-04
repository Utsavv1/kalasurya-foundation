// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Donation amount selection
document.addEventListener('DOMContentLoaded', function() {
    const donationBtns = document.querySelectorAll('.donation-btn');
    const customAmountInput = document.querySelector('.amount-input');
    
    donationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            donationBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Clear custom amount input
            if (customAmountInput) {
                customAmountInput.value = '';
            }
        });
    });
    
    // Handle custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            if (this.value) {
                donationBtns.forEach(btn => btn.classList.remove('active'));
            }
        });
    }
});

// Form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            if (!email) {
                alert('Please enter a valid email address.');
                return;
            }
            
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    });
    
    // Newsletter signup (not in form)
    const newsletterSignups = document.querySelectorAll('.newsletter-signup');
    newsletterSignups.forEach(signup => {
        const btn = signup.querySelector('button');
        if (btn && !btn.closest('form')) {
            btn.addEventListener('click', function() {
                const input = signup.querySelector('input[type="email"]');
                const email = input.value;
                
                if (!email) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                const originalText = this.textContent;
                this.textContent = 'Subscribing...';
                this.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for subscribing to our newsletter!');
                    input.value = '';
                    this.textContent = originalText;
                    this.disabled = false;
                }, 1500);
            });
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .value-card, .program-card, .involvement-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current).toLocaleString() + (counter.textContent.includes('+') ? '+' : '');
                }, 20);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

document.addEventListener('DOMContentLoaded', animateCounters);

// Button click handlers for various actions
document.addEventListener('DOMContentLoaded', function() {
    // Generic button handlers
    const buttons = document.querySelectorAll('button, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim().toLowerCase();
            
            // Handle different button types
            if (buttonText.includes('volunteer') || buttonText.includes('become a volunteer')) {
                e.preventDefault();
                alert('Thank you for your interest in volunteering! Please contact us at volunteer@kalasuryafoundation.org or call +91 9876543210 to get started.');
            } else if (buttonText.includes('donate') || buttonText.includes('donation')) {
                e.preventDefault();
                alert('Thank you for wanting to support our cause! Please contact us at donate@kalasuryafoundation.org or call +91 9876543210 to make a donation.');
            } else if (buttonText.includes('register') || buttonText.includes('join event')) {
                e.preventDefault();
                alert('Thank you for your interest! Please contact us at events@kalasuryafoundation.org or call +91 9876543210 to register for this event.');
            } else if (buttonText.includes('learn more') || buttonText.includes('read full story')) {
                e.preventDefault();
                alert('For more detailed information, please visit our website or contact us at info@kalasuryafoundation.org');
            } else if (buttonText.includes('support this program')) {
                e.preventDefault();
                alert('Thank you for wanting to support this program! Please contact us at programs@kalasuryafoundation.org or call +91 9876543210');
            } else if (buttonText.includes('download')) {
                e.preventDefault();
                alert('The program guide will be available for download soon. Please contact us at info@kalasuryafoundation.org to request a copy.');
            }
        });
    });
});

// WhatsApp button functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('Hello! I would like to know more about Kalasurya Foundation and your programs.');
            window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
        });
    });
});

// Add loading states to buttons
function addLoadingState(button, duration = 1500) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, duration);
}

// Enhanced form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Add real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = 'hsl(0, 84%, 60%)';
                this.setCustomValidity('Please enter a valid email address');
            } else {
                this.style.borderColor = 'hsl(45, 15%, 88%)';
                this.setCustomValidity('');
            }
        });
    });
    
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = 'hsl(0, 84%, 60%)';
                this.setCustomValidity('Please enter a valid phone number');
            } else {
                this.style.borderColor = 'hsl(45, 15%, 88%)';
                this.setCustomValidity('');
            }
        });
    });
});

// Keyboard navigation enhancements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// Print-friendly styles toggle
function togglePrintMode() {
    document.body.classList.toggle('print-mode');
}

// Initialize all functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kalasurya Foundation website loaded successfully!');
    
    // Add any additional initialization code here
    
    // Set current year in footer if needed
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
});