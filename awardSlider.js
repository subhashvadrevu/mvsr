// Selecting DOM elements
const left = document.querySelector('.al');
const right = document.querySelector('.ar');
const slider = document.querySelector('.slider-awards');
const cards = document.querySelectorAll('.slider-awards .card'); // All the cards

let sliderNumber = 0; // Keeps track of the current card

// Set width of one card (with margin if needed)
const cardWidth = cards[0].offsetWidth + 20; // 300px card width + 20px margin-right
const totalCards = cards.length;  // Number of cards
const visibleCards = Math.floor(document.querySelector('.slider-wrapper').offsetWidth / cardWidth);  // Cards visible at once

// Move to the next image
function moveToNextImage() {
    if (sliderNumber < totalCards - visibleCards) {
        sliderNumber++;
    } else {
        sliderNumber = 0; // Loop back to the first card
    }
    updateSliderPosition();
}

// Move to the previous image
function moveToPrevImage() {
    if (sliderNumber > 0) {
        sliderNumber--;
    } else {
        sliderNumber = totalCards - visibleCards;  // Loop back to the last card
    }
    updateSliderPosition();
}

// Update the slider position based on sliderNumber
function updateSliderPosition() {
    slider.style.transition = 'transform 0.5s ease';  // Smooth transition
    slider.style.transform = `translateX(-${sliderNumber * cardWidth}px)`;  // Move the slider left
}

// Event listeners for the arrows
right.addEventListener('click', moveToNextImage);
left.addEventListener('click', moveToPrevImage);

// Auto-scrolling every 5 seconds
setInterval(moveToNextImage, 5000);
    