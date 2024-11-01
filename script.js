let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // esto limitara el indice de las fotos
    if (index < 0) {
        currentSlide = 0;
    } else if (index >= slides.length) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // para ver las fotos
    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Mostrar/Ocultar flechas segun odnde este
    if (currentSlide === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (currentSlide === slides.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Iniciar mostrando la primera diapositiva y ocultando la flecha "prev"
showSlide(0);
