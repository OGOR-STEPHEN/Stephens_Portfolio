// Fixed variable selectors (corrected 'nav a' and added null checks)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // Fixed 'nava' → 'nav a'

// Mobile menu toggle (with null check)
if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Scroll-based active link highlighting (with throttling)
let isScrolling;
window.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) targetLink.classList.add('active'); // Added null check
            }
        });
    }, 100); // Throttle to 100ms
});