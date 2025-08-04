// DOM Elements
const landingPage = document.querySelector(".hero-section");
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const mainNavbar = document.getElementById("mainNavbar");
const heroSection = document.getElementById("home");

// Image randomization for hero section
const imageArray = ["home1.jpg", "home2.jpg", "home3.jpg"];
let randomOption = true;

// Randomize hero background images
function randomizeImgs() {
  if (randomOption === true) {
    // Set initial random image
    let randomNumber = Math.floor(Math.random() * imageArray.length);
    landingPage.style.backgroundImage = `url("img/${imageArray[randomNumber]}")`;
    
    // Change image every 4 seconds
    setInterval(() => {
      randomNumber = Math.floor(Math.random() * imageArray.length);
      landingPage.style.backgroundImage = `url("img/${imageArray[randomNumber]}")`;
    }, 4000);
  }
}

// Mobile menu toggle
function setupMobileMenu() {
  if (menuIcon) {
    menuIcon.onclick = () => {
      navbar.classList.toggle("active");
    };
  }

  window.onscroll = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  };
}

// Navbar scroll behavior
function setupNavbarScroll() {
  const heroHeight = heroSection.offsetHeight;
  
  function handleScroll() {
    if (window.scrollY > heroHeight * 0.8) {
      // Scrolled past 80% of hero height - show white navbar
      mainNavbar.classList.add("scrolled");
      header.classList.add("shadow");
      
      // Change navbar toggler color
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) {
        toggler.style.borderColor = "#002F2F";
        toggler.querySelector(".navbar-toggler-icon").style.backgroundImage = 
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 47, 47, 0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
      }
    } else {
      // In hero section - hide navbar
      mainNavbar.classList.remove("scrolled");
      header.classList.remove("shadow");
      
      // Reset navbar toggler color
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler) {
        toggler.style.borderColor = "white";
        toggler.querySelector(".navbar-toggler-icon").style.backgroundImage = 
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")";
      }
    }
  }

  // Initialize on page load
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

// Movie card hover effects
function setupMovieCards() {
  const movieCards = document.querySelectorAll(".movie-card, .card");
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
document.addEventListener("DOMContentLoaded", function() {
  // Initialize random hero images
  if (landingPage) {
    randomizeImgs();
  }
  
  // Setup mobile menu
  setupMobileMenu();
  
  // Setup navbar scroll behavior
  if (mainNavbar && heroSection) {
    setupNavbarScroll();
  }
  
  // Setup smooth scrolling
  setupSmoothScrolling();
  
  // Setup movie card effects
  setupMovieCards();
  
  // Add any other initialization code here
});

// Window load event for any additional setup
window.addEventListener("load", function() {
  // Any code that needs to run after all resources are loaded
});