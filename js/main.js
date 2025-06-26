document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const openPrompt = document.getElementById('open-prompt');
    const openBtn = document.getElementById('open-btn');
    const letterContainer = document.getElementById('letter-container');
    const mainMessage = document.getElementById('main-message');
    const endingMessage = document.getElementById('ending-message');
    const galleryBtn = document.getElementById('gallery-btn');
    const loveTheme = document.getElementById('love-theme');
    const muteBtn = document.getElementById('mute-btn');
    const heartsContainer = document.getElementById('hearts-container');

    const message = "Four months ago, I found my favorite person. Every day since has been a gift. You fill my world with laughter, my heart with love, and my life with meaning...";
    let index = 0;

    // Hide preloader once content is loaded
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    function typeMessage() {
        if (index < message.length) {
            mainMessage.textContent += message.charAt(index);
            index++;
            setTimeout(typeMessage, 80); // Slightly faster typing
        } else {
            mainMessage.style.borderRight = 'none';
            setTimeout(() => {
                endingMessage.classList.remove('hidden');
                endingMessage.classList.add('fade-in');
            }, 1500);
        }
    }

    function redirectToGallery() {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'gallery.html';
        }, 1000);
    }

    function playMusic() {
        if (loveTheme) {
            loveTheme.play().catch(() => {});
        }
    }

    function toggleMute() {
        if (loveTheme) {
            loveTheme.muted = !loveTheme.muted;
            muteBtn.textContent = loveTheme.muted ? 'Unmute' : 'Mute';
        }
    }

    function floatingHearts() {
        if (heartsContainer) {
            setInterval(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.animationDuration = `${Math.random() * 7 + 8}s`; // Slower, more graceful
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 15000);
            }, 500);
        }
    }

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            openPrompt.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            letterContainer.classList.add('fade-in');
            muteBtn.classList.remove('hidden');
            playMusic();
            floatingHearts();
            setTimeout(typeMessage, 2000); // Start typing after a delay
        });
    }

    if (galleryBtn) {
        galleryBtn.addEventListener('click', redirectToGallery);
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }
});