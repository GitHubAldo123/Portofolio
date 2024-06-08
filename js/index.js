function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function hideMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.add('hidden');
}

             // HOME
document.addEventListener('DOMContentLoaded', () => {

    //     // Scroll image di area Home
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carousel && prevBtn && nextBtn) {
    const SCROLL_AMOUNT = 200; // Adjust the scroll amount as needed
    const AUTO_SCROLL_INTERVAL = 2000; // Adjust the interval time as needed

    // Function to scroll the carousel
    const scrollCarousel = (amount) => {    
        const currentScrollLeft = carousel.scrollLeft;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        let newScrollLeft = currentScrollLeft + amount;

        // If reached the end, reset scroll position to the beginning
        if (newScrollLeft >= maxScrollLeft) {
                newScrollLeft = 0;
            } else if (newScrollLeft < 0) {
                // If reached the beginning, reset scroll position to the end
                newScrollLeft = maxScrollLeft;
        }

        carousel.scrollTo({
            left: newScrollLeft,
                behavior: 'smooth'
        });
    };

    // Button click event listeners
    prevBtn.addEventListener('click', () => scrollCarousel(-SCROLL_AMOUNT));
    nextBtn.addEventListener('click', () => scrollCarousel(SCROLL_AMOUNT));
        
    // Auto-scroll setup
    let autoScrollInterval = setInterval(() => {
        scrollCarousel(SCROLL_AMOUNT);
    }, AUTO_SCROLL_INTERVAL);

    // Start auto-scroll immediately
    scrollCarousel(SCROLL_AMOUNT);
        
    // Pause auto-scroll on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    // Resume auto-scroll when hover ends
    carousel.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(() => {
            scrollCarousel(SCROLL_AMOUNT);
        }, AUTO_SCROLL_INTERVAL);
    });
}

    // // Animasi deskripsi pada area Home
    const content = document.getElementById('content');
    const curtainLeft = document.getElementById('curtain-left');
    const curtainRight = document.getElementById('curtain-right');

    if (content && curtainLeft && curtainRight) {
        // Apply initial styles to hide the content and curtains
        content.style.opacity = '0';
        curtainLeft.style.transition = 'transform 1s ease';
        curtainRight.style.transition = 'transform 1s ease';
        curtainLeft.style.transform = 'translateX(-100%)';
        curtainRight.style.transform = 'translateX(100%)';

        setTimeout(() => {
            // Remove initial styles to reveal the content and animate the curtains
            content.style.opacity = '1';
            curtainLeft.style.transform = 'translateX(0)';
            curtainRight.style.transform = 'translateX(0)';
        }, 2000); // Adjust the timing as needed
    }
});

// Clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call

// About section - show skills
const skillsElement = document.getElementById("skills");
if (skillsElement) {
    skillsElement.classList.toggle("hidden");
}

// mode active maps
function initMap() {
    const location = { lat: -6.743673, lng: 108.453127 }; // Coordinates of Cirebon, Indonesia
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
    initMap();
}

// Play background music
const backgroundMusic = document.getElementById('backgroundMusic');
if (backgroundMusic) {
backgroundMusic.play();
}

// Scroll ke Home perlahan
document.getElementById('scrollToTopBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah tindakan default dari tautan
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Melakukan scroll halus
        });
    });
