const track = document.getElementById('sliderTrack');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Clonamos los slides para efecto infinito
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

// Variables
let slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
let isAnimating = false;

// Función para mover el slider
function moveSlider() {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Evento botones
nextButton.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex++;
    moveSlider();
});

prevButton.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    currentIndex--;
    moveSlider();
});

// Reiniciar posición cuando llegamos al final
track.addEventListener('transitionend', () => {
    const totalSlides = slides.length;
    if (currentIndex >= totalSlides) {
        track.style.transition = 'none';
        currentIndex = 0;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    } else if (currentIndex < 0) {
        track.style.transition = 'none';
        currentIndex = totalSlides - 1;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    isAnimating = false;
});

// Auto-scroll
let autoScroll = setInterval(() => {
    nextButton.click();
}, 4000);

// Pausar al pasar el mouse
const slider = document.querySelector('.slider-principal');
slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
slider.addEventListener('mouseleave', () => autoScroll = setInterval(() => nextButton.click(), 4000));

// Ajustar slideWidth si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    moveSlider();
});


const contenedor = document.querySelector('.contenedor-tarjetas');
const btnIzquierda = document.querySelector('.flecha.izquierda');
const btnDerecha = document.querySelector('.flecha.derecha');

let desplazamiento = 0;
const tarjeta = document.querySelector('.tarjeta-producto');
const anchoTarjeta = tarjeta.offsetWidth + 20; // ancho + gap

btnDerecha.addEventListener('click', () => {
  const maxDesplazamiento = contenedor.scrollWidth - contenedor.clientWidth;
  desplazamiento += anchoTarjeta;
  if (desplazamiento > maxDesplazamiento) desplazamiento = maxDesplazamiento;
  contenedor.style.transform = `translateX(-${desplazamiento}px)`;
});

btnIzquierda.addEventListener('click', () => {
  desplazamiento -= anchoTarjeta;
  if (desplazamiento < 0) desplazamiento = 0;
  contenedor.style.transform = `translateX(-${desplazamiento}px)`;
});

