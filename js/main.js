// Function to handle navbar styling on scroll
function updateNavbar() {
  const navbar = document.getElementById('mainNavbar');
  
  if (window.scrollY > 50) {
    // Scrolled state - add scrolled class
    navbar.classList.add('scrolled');
  } else {
    // Top of page - remove scrolled class  
    navbar.classList.remove('scrolled');
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Movie card hover effects
function setupMovieCards() {
  const movieCards = document.querySelectorAll(".movie-card, .card, #movies .card, #coming .card");
  movieCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Run navbar update on page load to set initial state
  updateNavbar();
  
  // Setup smooth scrolling
  setupSmoothScrolling();
  
  // Setup movie card effects
  setupMovieCards();
});

// Run navbar update on scroll
window.addEventListener('scroll', updateNavbar);