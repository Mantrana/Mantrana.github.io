// Function to compose email from Contact page - Web Mail Client EmailJS

(function() {
    emailjs.init("4H540YDKzOvNZrOq-"); // Replace with your actual public key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading status
    const status = document.getElementById('status');
    status.innerHTML = '<p style="color: blue;">Sending message...</p>';
    
    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        phone:document.getElementById('phone').value
    };

    // Send email using EmailJS
    emailjs.send('service_67e8x7d', 'template_53q8sno', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            status.innerHTML = '<p class="success">Message sent successfully!</p>';
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            status.innerHTML = '<p class="error">Failed to send message. Please try again.</p>';
        });
});

    // Basic form validation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(event) {
            event.preventDefault();
            this.classList.add('error-input');
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error-input');
        });
    });