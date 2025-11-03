// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Carrusel Vertical (Sección 2) ---
    const slides = document.querySelectorAll('.carousel-slide');
    const next = document.getElementById('nextSlide');
    const prev = document.getElementById('prevSlide');
    let index = 0;

    // Función para mostrar el slide correcto
    function showSlide(i) {
        // Oculta todos los slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Muestra solo el slide en la posición 'i'
        slides[i].classList.add('active');
    }

    // Evento para el botón "siguiente"
    next.addEventListener('click', () => {
        // Calcula el siguiente índice, y si llega al final, vuelve a 0
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    // Evento para el botón "anterior"
    prev.addEventListener('click', () => {
        // Calcula el índice anterior, y si está en 0, va al último
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    // Cambio automático cada 7 segundos
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 7000);

});