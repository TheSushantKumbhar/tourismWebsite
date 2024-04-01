
// Define the interval variable globally
let autoScrollInterval;

// Function to scroll left
function scrollLeft() {
    const offercontainer = document.querySelector('.offers');
    offercontainer.scrollLeft -= 400; 
}

// Function to scroll right
function scrollRight() {
    const offercontainer = document.querySelector('.offers');
    offercontainer.scrollLeft += 400; 
}

// Start automatic scrolling
autoScrollInterval = setInterval(scrollRight, 5000);

// Add event listeners to the .offers container to stop automatic scrolling on hover
const offersContainer = document.querySelector('.offers');
offersContainer.addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval); // Stop automatic scrolling when mouse enters .offers container
});

offersContainer.addEventListener('mouseleave', () => {
    // Resume automatic scrolling when mouse leaves .offers container
    autoScrollInterval = setInterval(scrollRight, 5000);
});
