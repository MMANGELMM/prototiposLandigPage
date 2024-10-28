let currentIndex = 0; // Índice de la tarjeta actual
const convenios = document.querySelectorAll('.convenio');

// Función para actualizar el estado de las tarjetas
function updateCarousel() {
    // Remover la clase `active` de todas las tarjetas
    convenios.forEach((convenio) => {
        convenio.classList.remove('active');
        convenio.style.opacity = 0; // Esconder todas las tarjetas
    });

    // Marcar la tarjeta actual como activa
    convenios[currentIndex].classList.add('active');
    convenios[currentIndex].style.opacity = 1; // Mostrar la tarjeta activa
}

// Botón "Siguiente"
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % convenios.length; // Incrementar el índice y rotar al inicio si es necesario
    updateCarousel();
});

// Botón "Anterior"
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + convenios.length) % convenios.length; // Decrementar el índice y rotar al final si es necesario
    updateCarousel();
});

// Iniciar el carrusel en la primera tarjeta
updateCarousel();
