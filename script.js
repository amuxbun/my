// Variables to hold image elements
const mainImage = document.getElementById('main-image');

// Hearts animation function
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Randomize position and size
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Show hearts when clicking "Yes"
function answerYes() {
    // Create hearts animation
    setInterval(createHeart, 100);

    // Change the image and show message
    mainImage.src = 'https://static.vecteezy.com/system/resources/previews/017/048/066/non_2x/cute-chibi-dinosaur-illustration-dinosaur-kawaii-drawing-style-dinosaur-cartoon-vector.jpg'; // Replace with your "I knew it!" image
    mainImage.alt = "I knew it!";
    
    const message = document.createElement('h2');
    message.textContent = "I knew it! 😉😘";
    message.style.color = "#ff69b4";
    document.body.appendChild(message);

    // Hide the buttons after "Yes"
    document.querySelector('.buttons').style.display = 'none';
}

// Move No button and change image
function answerNo() {
    // Make the No button move
    document.querySelector('.no-btn').classList.add('move');
    
    // Change image to show a new one
    mainImage.src = 'https://i.pinimg.com/564x/41/46/20/41462030e2edf492b1a78f56ffd34322.jpg'; // Replace with the "No" image
    mainImage.alt = "nooo!";
    
    // Hide the buttons after "No"
    document.querySelector('.buttons').style.display = 'none';
}
