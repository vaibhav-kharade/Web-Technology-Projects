document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        // Name validation (not empty)
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        // Email validation (using a basic pattern)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email address";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Password validation (at least 6 characters)
        if (passwordInput.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
