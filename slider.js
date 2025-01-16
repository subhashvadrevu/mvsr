const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let sliderNumber = 0; 

function moveToNextImage() {
    if (sliderNumber < images.length - 1) {
        sliderNumber++;
        slider.style.transition = 'transform 2s ease'; 
        slider.style.transform = `translateX(-${sliderNumber * 800}px)`; 
    } else {
        sliderNumber = 0; 
        slider.style.transition = 'none'; 
        slider.style.transform = `translateX(0)`; 
        setTimeout(() => {
            slider.style.transition = 'transform 2s ease'; 
        }, 50); 
    }
}

function moveToPrevImage() {
    if (sliderNumber > 0) {
        sliderNumber--;
        slider.style.transition = 'transform 2s ease';
        slider.style.transform = `translateX(-${sliderNumber * 800}px)`; 
    } else {
        sliderNumber = images.length - 1;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${sliderNumber * 800}px)`; 
        setTimeout(() => {
            slider.style.transition = 'transform 2s ease'; 
        }, 50);
    }
}

right.addEventListener('click', () => {
    moveToNextImage();
});

left.addEventListener('click', () => {
    moveToPrevImage();
});

setInterval(() => {
    moveToNextImage();
}, 10000); 

