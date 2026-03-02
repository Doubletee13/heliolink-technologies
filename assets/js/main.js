// Navigation & Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuBtn && mobileMenu) {
    // Toggle menu
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        toggleMenu(!isOpen);
    });

    // Close when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            toggleMenu(false);
        }
    });

    // Close when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // Auto-close menu when rotating to landscape or resizing to desktop width
    const handleNavResize = () => {
        const isDesktop = window.innerWidth >= 1200 ||
            (window.innerWidth >= 1024 && window.innerWidth > window.innerHeight);
        if (isDesktop && mobileMenu.classList.contains('translate-x-0')) {
            toggleMenu(false);
        }
    };
    window.addEventListener('resize', handleNavResize);
    window.addEventListener('orientationchange', () => setTimeout(handleNavResize, 350));
}

function toggleMenu(show) {
    if (show) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Hero Background Slideshow using simple interval
const heroSection = document.getElementById('hero-section');
if (heroSection) {
    const images = [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80'
    ];
    let currentImageIndex = 0;

    // Create image elements for smooth crossfading
    const bgContainer = document.createElement('div');
    bgContainer.className = 'absolute inset-0 z-0 overflow-hidden';
    heroSection.insertBefore(bgContainer, heroSection.firstChild);

    const imgEls = images.map((src, index) => {
        const img = document.createElement('div');
        img.className = `absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`;
        img.style.backgroundImage = `url('${src}')`;
        bgContainer.appendChild(img);
        return img;
    });

    setInterval(() => {
        imgEls[currentImageIndex].classList.remove('opacity-100');
        imgEls[currentImageIndex].classList.add('opacity-0');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        imgEls[currentImageIndex].classList.remove('opacity-0');
        imgEls[currentImageIndex].classList.add('opacity-100');
    }, 5000);
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Scroll Fade-In Animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out');
    fadeObserver.observe(section);
});

// CEO Biography Dropdown (About Page)
const ceoBioToggle = document.getElementById('ceo-bio-toggle');
const ceoBioContent = document.getElementById('ceo-bio-content');
const ceoBioIcon = document.getElementById('ceo-bio-icon');

if (ceoBioToggle && ceoBioContent) {
    ceoBioToggle.addEventListener('click', () => {
        const isExpanded = ceoBioContent.classList.contains('max-h-[1000px]');

        if (isExpanded) {
            ceoBioContent.classList.remove('max-h-[1000px]', 'opacity-100', 'mt-4');
            ceoBioContent.classList.add('max-h-0', 'opacity-0');
            if (ceoBioIcon) ceoBioIcon.classList.remove('rotate-180');
        } else {
            ceoBioContent.classList.remove('max-h-0', 'opacity-0');
            ceoBioContent.classList.add('max-h-[1000px]', 'opacity-100', 'mt-4');
            if (ceoBioIcon) ceoBioIcon.classList.add('rotate-180');
        }
    });
}
