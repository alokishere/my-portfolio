
// script.js
// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Update ScrollTrigger when locomotive scroll updates
scroll.on('scroll', ScrollTrigger.update);

// Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
    },
});

// Animations
gsap.from('.hero-title', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.hero',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});
gsap.from('.hero img', {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
        trigger: '.hero',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.hero',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});

gsap.from('.about-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});

gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.projects',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});

gsap.from('.contact-form', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        scroller: '[data-scroll-container]',
        start: 'top center',
    },
});

// Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll
ScrollTrigger.addEventListener('refresh', () => scroll.update());

// After everything is set up, refresh ScrollTrigger
ScrollTrigger.refresh();

// Add this to your script.js
function openResume() {
    // Replace 'path-to-your-resume.pdf' with the actual path to your resume file
    const resumePath = 'ALOK VISHWAKARMA Resume.pdf';
    window.open(resumePath, '_blank');
}

// Optional: Add loading animation
function openResume() {
    const resumePath = 'ALOK VISHWAKARMA Resume.pdf';
    
    // Change cursor to loading state
    document.body.style.cursor = 'wait';
    
    // Add loading class to title
    const resumeTitle = document.querySelector('.resume-title');
    resumeTitle.classList.add('loading');
    
    // Simulate loading (remove this in production and just use the window.open)
    setTimeout(() => {
        window.open(resumePath, '_blank');
        document.body.style.cursor = 'default';
        resumeTitle.classList.remove('loading');
    }, 500);
}