document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;

            if (name && email && message) {
                // Assuming here you have a function named 'sendEmail' to handle sending the email
                sendEmail(name, email, message);
                // Clear the form fields after submission
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
