document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navbar = document.querySelector('.navbar');

    // Function to toggle the menu state
    function toggleMenu() {
        menuToggle.checked = !menuToggle.checked;
        navbar.style.left = menuToggle.checked ? '0' : '-200px';
    }

    // Event listener to toggle the menu state when hamburger menu is clicked
    menuToggle.addEventListener('change', function() {
        toggleMenu();
        if (this.checked) {
            // Add event listener to close menu when clicking anywhere outside of it
            document.addEventListener('click', closeMenuOnClickOutside);
        } else {
            // Remove event listener when menu is closed
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    });

    // Function to close the menu when clicking anywhere outside of it
    function closeMenuOnClickOutside(event) {
        if (!navbar.contains(event.target) && event.target !== menuToggle) {
            toggleMenu();
            document.removeEventListener('click', closeMenuOnClickOutside);
        }
    }

    // Close the menu when clicking on the hamburger menu
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the document click event from being triggered
        toggleMenu();
    });

    // Close the menu when clicking on a navigation link
    var navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            toggleMenu();
        });
    });
});

