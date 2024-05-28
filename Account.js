document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Perform login logic here
            // Redirect to account dashboard after successful login
            window.location.href = 'account-dashboard.html';
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Perform registration logic here
            // Redirect to account dashboard after successful registration
            window.location.href = 'account-dashboard.html';
        });
    }
});
