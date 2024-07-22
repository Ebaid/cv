function generateStars(id, count, size) {
    const stars = document.getElementById(id);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * screenWidth}px`;
        star.style.top = `${Math.random() * screenHeight}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
}

window.addEventListener('load', () => {
    generateStars('stars', 200, 1);
    generateStars('stars2', 100, 2);
    generateStars('stars3', 50, 3);
});
