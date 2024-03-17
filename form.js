$(document).ready(function() {
    $('#signInForm').submit(function(event) {
        event.preventDefault();
        // Perform SignIn validation here
        // For demonstration, you can just alert success
        alert("SignIn successful!");
    });

    $('#signUpForm').submit(function(event) {
        event.preventDefault();
        var isValid = true;
        // Perform SignUp validation here
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var email = $('#email').val();
        var age = parseInt($('#age').val());

        // Checking if any input field is empty
        $('input[type="text"], input[type="password"], input[type="email"], input[type="number"], select').each(function() {
            if ($(this).val().trim() === '') {
                $(this).addClass('error');
                isValid = false;
            } else {
                $(this).removeClass('error');
            }
        });

        // Password must contain special and numeric characters
        var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        var numericCharRegex = /\d/;
        if (!specialCharRegex.test(password) || !numericCharRegex.test(password)) {
            $('#password').addClass('error');
            $('#confirmPassword').addClass('error');
            isValid = false;
            if(!specialCharRegex.test(password) || !numericCharRegex.test(password)) {
                $('#password').after('<div class="error">Password must contain at least one special and one numeric character</div>');
            }
        } else {
            $('#password').removeClass('error');
            $('#confirmPassword').removeClass('error');
            $('#password').next('.error').remove(); // Remove any existing error message
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            $('#password').addClass('error');
            $('#confirmPassword').addClass('error');
            $('#confirmPassword').after('<div class="error">Passwords do not match</div>');
            isValid = false;
        } else {
            $('#password').removeClass('error');
            $('#confirmPassword').removeClass('error');
            $('#confirmPassword').next('.error').remove(); // Remove any existing error message
        }

        // Email address must be in a valid format and end with 'gmail.com'
        var emailRegex = /^[^\s@]+@gmail\.com$/;
        if (!emailRegex.test(email)) {
            $('#email').addClass('error');
            isValid = false;
            if(!/@gmail\.com$/.test(email)) {
                $('#email').after('<div class="error">Email should be in the format example@gmail.com</div>');
            }
        } else {
            $('#email').removeClass('error');
            $('#email').next('.error').remove(); // Remove any existing error message
        }

        // Age must be a valid number or within a specified range (7 to 70)
        if (isNaN(age) || age < 7 || age > 70) {
            $('#age').addClass('error');
            isValid = false;
            if (isNaN(age)) {
                $('#age').after('<div class="error">Age must be a valid number</div>');
            } else {
                $('#age').after('<div class="error">Age must be between 7 and 70</div>');
            }
        } else {
            $('#age').removeClass('error');
            $('#age').next('.error').remove(); // Remove any existing error message
        }

        if (isValid) {
            alert("SignUp successful!");
            // Here you can submit the form or perform any other action
        } else {
            alert("Please correct the errors in the form.");
        }
    });
});
