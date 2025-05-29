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
    
    // Manga image size controls
    const mangaImage = document.getElementById('manga-image');
    const sizeUpBtn = document.getElementById('size-up');
    const sizeDownBtn = document.getElementById('size-down');
    
    // Get initial width from CSS or default to 400px (smallest size)
    let currentWidth = 400;
    
    // Try to get stored size preference
    const storedWidth = localStorage.getItem('mangaImageWidth');
    if (storedWidth) {
        currentWidth = parseInt(storedWidth);
        mangaImage.style.width = currentWidth + 'px';
    }
    
    // Size control functions
    function increaseSize() {
        currentWidth += 50;
        if (currentWidth > 1600) currentWidth = 1600; // Max size
        updateImageSize();
    }
    
    function decreaseSize() {
        currentWidth -= 50;
        if (currentWidth < 400) currentWidth = 400; // Min size
        updateImageSize();
    }
    
    function updateImageSize() {
        mangaImage.style.width = currentWidth + 'px';
        localStorage.setItem('mangaImageWidth', currentWidth.toString());
    }
    
    // Add event listeners
    if (sizeUpBtn) sizeUpBtn.addEventListener('click', increaseSize);
    if (sizeDownBtn) sizeDownBtn.addEventListener('click', decreaseSize);
    
    // Handle the mailing list form submission
    const mailingListForm = document.getElementById('mailing-list-form');
    
    if (mailingListForm) {
        mailingListForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would typically send the email to your server or a service like Mailchimp
                // For now, we'll just show a success message
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'signup-success';
                successMessage.textContent = 'Thank you! You\'ve been added to our mailing list.';
                
                // Replace the form with the success message
                mailingListForm.parentNode.replaceChild(successMessage, mailingListForm);
                
                // Store in localStorage to remember they signed up
                localStorage.setItem('signedUpForMailingList', 'true');
            }
        });
    }
    
    // Check if user already signed up (in a real app, this would be server-side)
    if (localStorage.getItem('signedUpForMailingList') === 'true') {
        const mailingListForm = document.getElementById('mailing-list-form');
        if (mailingListForm) {
            const successMessage = document.createElement('div');
            successMessage.className = 'signup-success';
            successMessage.textContent = 'You\'re already on our mailing list. Thank you!';
            
            mailingListForm.parentNode.replaceChild(successMessage, mailingListForm);
        }
    }
});