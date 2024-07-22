// script.js
function generateStars(id, count, size) {
    const stars = document.getElementById(id);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        fragment.appendChild(star);
    }

    stars.appendChild(fragment);
}

function initStars() {
    generateStars('stars', 200, 1);
    generateStars('stars2', 100, 2);
    generateStars('stars3', 50, 3);
}

// Call initStars when the DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStars);
} else {
    initStars();
}
