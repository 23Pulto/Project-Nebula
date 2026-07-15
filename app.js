document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
    
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(9, 9, 11, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(9, 9, 11, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    });

    const mainBtn = document.getElementById('main-download-btn');
    const navBtn = document.getElementById('nav-download-btn');

    const handleDownload = (e) => {
        e.preventDefault();
        if (typeof CONFIG !== 'undefined' && CONFIG.DOWNLOAD_LINK) {
            window.open(CONFIG.DOWNLOAD_LINK, '_blank');
        }
    };

    if (mainBtn) mainBtn.addEventListener('click', handleDownload);
    if (navBtn) navBtn.addEventListener('click', handleDownload);
});
