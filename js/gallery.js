document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryMusic = document.getElementById('gallery-music');
    const muteBtn = document.getElementById('mute-btn-gallery');
    const particleContainer = document.getElementById('particle-container');
    let isMusicPlaying = false;

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 20000);
    }

    setInterval(createParticle, 500);

    function playMusic() {
        if (galleryMusic) {
            galleryMusic.play().catch(() => {});
        }
    }

    function toggleMute() {
        if (galleryMusic) {
            galleryMusic.muted = !galleryMusic.muted;
            muteBtn.textContent = galleryMusic.muted ? 'Unmute' : 'Mute';
        }
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!isMusicPlaying) {
                playMusic();
                isMusicPlaying = true;
            }
            item.classList.toggle('flipped');
        });
    });
});