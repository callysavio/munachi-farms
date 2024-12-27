document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle

    document.getElementById('menuToggle').addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
      const menuIcon = document.getElementById("menuIcon");
      // Toggle between fa-bars and fa-times
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
      // Add a stylish rotation or color change
      menuIcon.classList.toggle("cross-icon");
    });
  
    // Active link management
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all links
        navItems.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        item.classList.add('active');
      });
    });
  });