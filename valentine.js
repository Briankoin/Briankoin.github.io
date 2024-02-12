// Get the buttons
const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');

// Add event listener for 'click' event to the 'YES' button
yesButton.addEventListener('click', function() {
    alert('YESSSSSSSSSS!!!!!Thanks for being my Valentine. I guess you could not press the NO button😉. Love you Kirbz ');
});

// Add event listener for 'mouseover' event to the 'NO' button
noButton.addEventListener('mouseover', function(event) {
    // Move the 'NO' button 50px diagonally
    const left = parseInt(noButton.style.left, 10) || 0;
    const top = parseInt(noButton.style.top, 10) || 0;
    const direction = Math.random() > 0.5 ? 50 : -50;
    noButton.style.left = `${left + direction}px`;
    noButton.style.top = `${top + direction}px`;
    noButton.style.position = 'absolute';
});