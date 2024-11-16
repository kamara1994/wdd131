// JavaScript for temples.js

document.addEventListener('DOMContentLoaded', function() {
  // Dynamic Footer: Set the current year
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Dynamic Footer: Set the last modified date
  const modifiedSpan = document.getElementById('modified');
  const lastModified = new Date(document.lastModified);
  modifiedSpan.textContent = `| Last Modified: ${lastModified.toLocaleDateString()}`;

  // Hamburger Menu Toggle
  const hamburgerButton = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburgerButton.addEventListener('click', function() {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Ensure all images have the same width and height for a uniform gallery
  const galleryImages = document.querySelectorAll('.gallery figure img');
  galleryImages.forEach((img) => {
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.objectFit = 'cover';
  });
});
