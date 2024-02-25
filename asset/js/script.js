// Function to prevent the user from closing the unbreakable alert
function preventCloseAlert() {
    var unbreakableAlert = document.getElementById('unbreakableAlert');
    unbreakableAlert.style.display = 'block';
    
    // Continuously check if the alert is still visible
    var interval = setInterval(function() {
        if (window.getComputedStyle(unbreakableAlert).display === 'none') {
            unbreakableAlert.style.display = 'block'; // Reopen the alert if it's closed
        }
    }, 1000); // Check every second
}

// Call the function to display the unbreakable alert
preventCloseAlert();