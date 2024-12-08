// Get the button and the div
const button = document.querySelector('.menu');
const div = document.getElementById('open');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Toggle the visibility of the div
    div.style.display = (div.style.display === 'none' || div.style.display === '') ? 'block' : 'none';
  });
