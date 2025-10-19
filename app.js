// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Close menu when clicking links
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.className = 'fas fa-sun';
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
});
