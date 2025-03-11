document.getElementById("menuButton").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents event from closing immediately
    document.getElementById("sidebar").classList.toggle("active"); // Toggle menu
});

document.getElementById("closeButton").addEventListener("click", function(event) {
    event.stopPropagation();
    document.getElementById("sidebar").classList.remove("active"); // Close menu
});

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.getElementById("menuButton");
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

