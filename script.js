// script.js
let currentSlide = 0;
const carouselItems = document.querySelector('.carousel-items');
const totalSlides = document.querySelectorAll('.carousel-item').length;


function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Usa o operador módulo para voltar ao início
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Correção para o slide anterior
    updateCarousel();
}

function updateCarousel() {
    const translateX = -currentSlide * (100 / totalSlides); // Calcula a porcentagem correta
    carouselItems.style.transform = `translateX(${translateX}%)`;
}