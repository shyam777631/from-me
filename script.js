document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Get elements
    const imageContainer = document.getElementById('image-container');
    const messageContent = document.getElementById('message-content');
    const footerContent = document.getElementById('footer-content');

    // Add click event listener to the image container
    imageContainer.addEventListener('click', function() {
        console.log('Image container clicked');
        
        // Reveal the message and footer
        messageContent.style.display = 'block';
        footerContent.style.display = 'block';
        
        // Hide the image container after the image is clicked
        imageContainer.style.display = 'none';
    });

    // Add click event listener to the message content (or footer)
    messageContent.addEventListener('click', function() {
        console.log('Message clicked');
        
        // Hide the message and footer
        messageContent.style.display = 'none';
        footerContent.style.display = 'none';
        
        // Show the image container again
        imageContainer.style.display = 'block';
    });

    // If you want the footer to also trigger the image reappearance
    footerContent.addEventListener('click', function() {
        console.log('Footer clicked');
        
        // Hide the message and footer
        messageContent.style.display = 'none';
        footerContent.style.display = 'none';
        
        // Show the image container again
        imageContainer.style.display = 'block';
    });
});
