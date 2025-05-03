// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the reading instruction element
    const readingInstruction = document.querySelector('.reading-instruction');
    
    // Make reading instruction visible for a few seconds when page loads
    if (readingInstruction) {
        readingInstruction.style.opacity = '1';
        
        // After 5 seconds, reduce opacity
        setTimeout(() => {
            readingInstruction.style.opacity = '0.7';
        }, 5000);
    }
    
    // Future functionality for manga navigation can be added here
});