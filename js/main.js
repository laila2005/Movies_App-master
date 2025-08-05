// Function to handle navbar styling
function updateNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const navbarBrand = navbar.querySelector('.navbar-brand');
  const navLinks = navbar.querySelectorAll('.nav-link');
  const togglerButton = navbar.querySelector('.navbar-toggler');
  const togglerIcon = navbar.querySelector('.navbar-toggler-icon');
  
  if (window.scrollY > 100) {
    // Scrolled state - WHITE background
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
    navbar.style.setProperty('background-color', 'rgba(255, 255, 255, 0.95)', 'important');
    navbar.style.setProperty('box-shadow', '0 2px 10px rgba(0,0,0,0.1)', 'important');
    
    // Brand name BLACK, film icon stays RED
    const brandIcon = navbarBrand.querySelector('i');
    navbarBrand.style.setProperty('color', '#000', 'important');
    if (brandIcon) {
      brandIcon.style.setProperty('color', '#ff2c1f', 'important'); // Keep icon red
    }
    
    // Nav links turn BLACK when scrolling
    navLinks.forEach(link => {
      link.style.setProperty('color', '#000', 'important');
    });
    
    // Change toggler for light theme
    if (togglerButton) {
      togglerButton.style.setProperty('border', '1px solid #000', 'important');
      togglerButton.style.setProperty('opacity', '1', 'important');
    }
    if (togglerIcon) {
      togglerIcon.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
      togglerIcon.style.setProperty('opacity', '1', 'important');
    }
  } else {
    // Hero section - completely transparent
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
    navbar.style.setProperty('background-color', 'transparent', 'important');
    navbar.style.setProperty('box-shadow', 'none', 'important');
    
    // Brand name WHITE, icon RED (default state)
    const brandIcon = navbarBrand.querySelector('i');
    navbarBrand.style.setProperty('color', '#fff', 'important');
    if (brandIcon) {
      brandIcon.style.setProperty('color', '#ff2c1f', 'important'); // Red icon
    }
    
    // Nav links RED (default state)
    navLinks.forEach(link => {
      link.style.setProperty('color', '#ff2c1f', 'important');
    });
    
    // Show toggler button in red
    if (togglerButton) {
      togglerButton.style.setProperty('border', '1px solid #ff2c1f', 'important');
      togglerButton.style.setProperty('opacity', '1', 'important');
    }
    if (togglerIcon) {
      togglerIcon.style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 44, 31, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
      togglerIcon.style.setProperty('opacity', '1', 'important');
    }
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
    // Set initial black background and remove any conflicting classes
    card.style.backgroundColor = "#000";
    card.classList.remove('bg-secondary');
    
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.transition = "transform 0.3s ease";
      card.style.backgroundColor = "#000";
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.backgroundColor = "#000";
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