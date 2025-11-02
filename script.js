document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // Hero Banner Slideshow
    const heroSlideshow = document.getElementById('heroSlideshow');
    const slides = heroSlideshow ? heroSlideshow.querySelectorAll('.slide') : [];
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (slides.length === 0) return;

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideshow() {
        if (slides.length > 1) {
            slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
        }
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    if (heroSlideshow && slides.length > 0) {
        showSlide(currentSlide);
        startSlideshow();

        if (prevSlideBtn) {
            prevSlideBtn.addEventListener('click', () => {
                stopSlideshow();
                prevSlide();
                startSlideshow(); // Reinicia o timer após interação manual
            });
        }

        if (nextSlideBtn) {
            nextSlideBtn.addEventListener('click', () => {
                stopSlideshow();
                nextSlide();
                startSlideshow(); // Reinicia o timer após interação manual
            });
        }

        // Pausar slideshow ao passar o mouse
        heroSlideshow.addEventListener('mouseenter', stopSlideshow);
        heroSlideshow.addEventListener('mouseleave', startSlideshow);
    }

    // Exemplo de Contador de Carrinho (para demonstração)
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    const cartCountSpan = document.querySelector('.cart-count');
    let cartItemCount = 0;

    if (addToCartButtons && cartCountSpan) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartItemCount++;
                cartCountSpan.textContent = cartItemCount;
                alert('Produto adicionado ao carrinho!'); // Apenas para feedback visual
            });
        });
    }
});