let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  // Hide all slides
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Loop to first slide

  slides[slideIndex - 1].style.display = 'block';  // Show the current slide

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Start the slider
showSlides();
