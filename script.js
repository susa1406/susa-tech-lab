// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Listen for a click on the hamburger menu
hamburger.addEventListener('click', () => {
    // Toggles the 'active' class on the navigation links to show/hide them
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Contact Form Handling (Prevents page reload)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (which refreshes the page)
    event.preventDefault();
    
    // Grab the user's name to personalize the alert
    const name = document.getElementById('name').value;
    
    // Show a simple success message
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Clear the form fields after submission
    contactForm.reset();
});