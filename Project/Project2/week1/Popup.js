const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Show popup
  popup.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  // Hide popup
  popup.style.display = 'none';
});