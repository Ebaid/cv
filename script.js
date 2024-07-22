/* script.js */
function generateStars(id, starCount, starSize) {
    const stars = document.getElementById(id);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;
        star.style.left = `${Math.random() * screenWidth}px`;
        star.style.top = `${Math.random() * screenHeight}px`;
        star.style.animationDuration = `${50 + Math.random() * 100}s`;
        star.style.animationDelay = `${Math.random() * 50}s`;
        stars.appendChild(star);
    }

    stars.style.animation = `animStar ${50 + Math.random() * 100}s linear infinite`;
}

document.addEventListener('DOMContentLoaded', () => {
    generateStars('stars', 800, 1);
    generateStars('stars2', 200, 2);
    generateStars('stars3', 100, 3);
});
