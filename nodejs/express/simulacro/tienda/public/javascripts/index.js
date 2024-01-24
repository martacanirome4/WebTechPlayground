// tienda/public/javascripts/index.js

function validateAndSubmit() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('pass2').value;
    var errorMessage = document.getElementById('error-message');

    // Reset error message
    errorMessage.innerHTML = '';

    // Check username
    if (!username) {
        errorMessage.innerHTML = 'Username is required.';
        return false;
    }

    // Check password length
    if (password.length < 8) {
        errorMessage.innerHTML = 'Password must be at least 8 characters long.';
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match.';
        return false;
    }

    // If all validations pass, submit the form
    return true;
}

// Attach the validateAndSubmit function to the form's onsubmit event
document.getElementById('registration-form').onsubmit = function() {
    return validateAndSubmit();
};
