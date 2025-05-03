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