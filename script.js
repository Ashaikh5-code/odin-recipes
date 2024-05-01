// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Image Hover Effect
const recipeImages = document.querySelectorAll('.recipe-image');
recipeImages.forEach(image => {
  image.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});

// Recipe Button Hover Effect
const recipeButtons = document.querySelectorAll('.recipe-btn');
recipeButtons.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#3e8e41';
  });
  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#4CAF50';
  });
});