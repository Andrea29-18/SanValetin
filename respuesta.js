function cerrarVentana() {
    window.location.href = 'index.html';
}


// Control de la música
const music = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        musicBtn.textContent = '🎵 Pausar música';
    } else {
        music.pause();
        musicBtn.textContent = '🎵 Reproducir música';
    }
});

// Reproducir música automáticamente al cargar la página (opcional)
window.onload = function () {
    music.play();
    musicBtn.textContent = '🎵 Pausar música';
};