// JavaScript for Mobile - Toggle Portfolio Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const portfolioMenu = document.querySelector('.project_menu');
    const portfolioLink = portfolioMenu.querySelector('a');
  
    portfolioLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 767) {
        e.preventDefault(); // Prevent default navigation
        portfolioMenu.classList.toggle('active'); // Toggle the dropdown on click
      }
    });
  });
  