// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonial);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevTestimonial);
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextTestimonial);
}

// Auto-rotate testimonials every 5 seconds
if (testimonialCards.length > 0) {
    setInterval(nextTestimonial, 5000);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Form Handling
const bookingForms = document.querySelectorAll('.booking-form, .tour-booking-form, .contact-form, .newsletter-form');

bookingForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Thank you! Your request has been submitted. We will contact you soon.');
        
        // Reset form
        this.reset();
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Book Now Button Functionality
const bookNowButtons = document.querySelectorAll('.btn-book-nav, .btn-primary');

bookNowButtons.forEach(button => {
    if (button.textContent.trim() === 'Book Now' || button.classList.contains('btn-book-nav')) {
        button.addEventListener('click', function(e) {
            // Scroll to booking form or contact section
            const bookingForm = document.querySelector('.booking-form-hero');
            if (bookingForm) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = bookingForm.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Contact Us Button Functionality
const contactButtons = document.querySelectorAll('.btn-secondary');

contactButtons.forEach(button => {
    if (button.textContent.trim() === 'Contact Us') {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Learn More Button Functionality
const learnMoreButtons = document.querySelectorAll('.btn-secondary');

learnMoreButtons.forEach(button => {
    if (button.textContent.trim() === 'Learn More') {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const headerOffset = 80;
                const elementPosition = aboutSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Read More Button Functionality
const readMoreButtons = document.querySelectorAll('.btn-primary');

readMoreButtons.forEach(button => {
    if (button.textContent.trim() === 'Read More') {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // You can expand the story content or scroll to packages
            const packagesSection = document.querySelector('#packages');
            if (packagesSection) {
                const headerOffset = 80;
                const elementPosition = packagesSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Gallery Image Lightbox Effect (Optional Enhancement)
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // You can implement a lightbox here if needed
        // For now, just a simple alert
        console.log('Gallery image clicked');
    });
});

// Package Card Hover Effects
const packageCards = document.querySelectorAll('.package-card');

packageCards.forEach(card => {
    const bookButton = card.querySelector('.btn-primary');
    
    if (bookButton) {
        bookButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to booking form
            const bookingForm = document.querySelector('.booking-form-hero');
            if (bookingForm) {
                const headerOffset = 80;
                const elementPosition = bookingForm.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Mobile Menu Toggle (if you want to add a mobile menu)
// You can uncomment and customize this if needed
/*
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.style.display = 'none';

const navWrapper = document.querySelector('.nav-wrapper');
if (navWrapper) {
    navWrapper.appendChild(mobileMenuBtn);
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
        }
    });
    
    mobileMenuBtn.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}
*/

// Initialize - Set first testimonial as active
if (testimonialCards.length > 0) {
    showTestimonial(0);
}

// Add animation on scroll (Optional Enhancement)
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

// Observe elements for animation
document.querySelectorAll('.package-card, .feature-item, .gallery-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Set minimum date for date inputs to today
const dateInputs = document.querySelectorAll('input[type="date"]');
const today = new Date().toISOString().split('T')[0];

dateInputs.forEach(input => {
    input.setAttribute('min', today);
});

// Set minimum time for time inputs
const timeInputs = document.querySelectorAll('input[type="time"]');
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();

timeInputs.forEach(input => {
    // Set minimum time to current time
    const minTime = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
    input.setAttribute('min', minTime);
});

console.log('Quad Bike Website - All scripts loaded successfully!');
