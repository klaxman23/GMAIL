// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-container input');
    const movieCards = document.querySelectorAll('.movie-card');
    const bookButtons = document.querySelectorAll('.book-now');
    const notifyButtons = document.querySelectorAll('.notify-me');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const trailerBtns = document.querySelectorAll('.trailer-btn');
    const trailerModal = document.querySelector('.trailer-modal');
    const modalIframe = document.querySelector('.trailer-modal iframe');
    const closeModal = document.querySelector('.close-modal');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        movieCards.forEach(card => {
            const movieTitle = card.querySelector('h3').textContent.toLowerCase();
            const movieGenre = card.querySelector('.genre').textContent.toLowerCase();
            const movieLanguage = card.querySelector('.language').textContent.toLowerCase();
            
            if (movieTitle.includes(searchTerm) || 
                movieGenre.includes(searchTerm) || 
                movieLanguage.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Trailer functionality
    trailerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const trailerUrl = btn.dataset.trailer;
            modalIframe.src = trailerUrl;
            trailerModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    closeModal.addEventListener('click', () => {
        trailerModal.style.display = 'none';
        modalIframe.src = ''; // Stop video playback
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    window.addEventListener('click', (e) => {
        if (e.target === trailerModal) {
            trailerModal.style.display = 'none';
            modalIframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Booking functionality
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const movieCard = e.target.closest('.movie-card');
            const movieTitle = movieCard.querySelector('h3').textContent;
            const rating = movieCard.querySelector('.rating span').textContent;
            alert(`Booking process started for ${movieTitle} (Rating: ${rating}). This would typically open a booking modal or redirect to a booking page.`);
        });
    });

    // Notify functionality
    notifyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const movieCard = e.target.closest('.movie-card');
            const movieTitle = movieCard.querySelector('h3').textContent;
            button.textContent = 'Notified!';
            button.style.backgroundColor = '#28a745';
            setTimeout(() => {
                button.textContent = 'Notify Me';
                button.style.backgroundColor = '#333';
            }, 2000);
        });
    });

    // Login functionality
    loginBtn.addEventListener('click', () => {
        alert('Login functionality would be implemented here');
    });

    // Signup functionality
    signupBtn.addEventListener('click', () => {
        alert('Signup functionality would be implemented here');
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add lazy loading for images
    const lazyImages = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add a simple loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
