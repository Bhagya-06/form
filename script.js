document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    var isValid = true;

    isValid = isValid && validateName() && validateEmail() && validatePhoneNumber() && validatePassword() && validateConfirmPassword();

    return isValid;
}

function validateName() {
    var fullName = document.getElementById('fullName').value;
    var fullNameError = document.getElementById('fullNameError');
    if (fullName.length < 5) {
        fullNameError.innerText = "Name must be at least 5 characters long.";
        return false;
    }
    fullNameError.innerText = "";
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.innerText = "Enter a valid email address.";
        return false;
    }
    emailError.innerText = "";
    return true;
}

function validatePhoneNumber() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var phoneError = document.getElementById('phoneError');
    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        phoneError.innerText = "Enter a valid 10-digit phone number.";
        return false;
    }
    phoneError.innerText = "";
    return true;
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');
    if (password.length < 8 || password.toLowerCase() === 'password') {
        passwordError.innerText = "Password must be at least 8 characters long and cannot be 'password'.";
        return false;
    }
    passwordError.innerText = "";
    return true;
}

function validateConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var confirmPasswordError = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        return false;
    }
    confirmPasswordError.innerText = "";
    return true;
}
