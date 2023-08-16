document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!validateForm(name, email, password)) {
          return; // Form validation failed
      }

      // Form submission code (you can replace this with your own logic)
      alert("Sign up successful!");

      // Clear form fields
      signupForm.reset();
  });

  function validateForm(name, email, password) {
      if (!name || !email || !password) {
          alert("Please fill in all fields.");
          return false;
      }

      if (!validateEmail(email)) {
          alert("Invalid email format.");
          return false;
      }

      return true;
  }

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
// the JavaScript code adds event listeners to the form and handles form submission and validation. When the form is submitted, the script prevents the default form submission behavior, validates the input fields, and displays appropriate alerts if validation fails.


document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const showLoginFormLink = document.getElementById("showLoginForm");
  const showSignupFormLink = document.getElementById("showSignupForm");
  const formsContainer = document.querySelector(".forms-container");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // ... Signup form submission logic
      console.log("Sign up form submitted");
  });

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // ... Login form submission logic
      console.log("Login form submitted");
  });

  showLoginFormLink.addEventListener("click", function (event) {
      event.preventDefault();
      formsContainer.classList.add("show-login");
  });

  showSignupFormLink.addEventListener("click", function (event) {
      event.preventDefault();
      formsContainer.classList.remove("show-login");
  });
});
//we've added event listeners to show and hide the login and signup forms when the corresponding links are clicked. The show-login class is added to the .forms-container to control which form is displayed.


document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");
  const showLoginFormLink = document.getElementById("showLoginForm");
  const showSignupFormLink = document.getElementById("showSignupForm");
  const formsContainer = document.querySelector(".forms-container");

  signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // ... Signup form submission logic
      console.log("Sign up form submitted");
      formsContainer.classList.add("show-login"); // Automatically show login form after signing up
  });

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // ... Login form submission logic
      console.log("Login form submitted");
  });

  showLoginFormLink.addEventListener("click", function (event) {
      event.preventDefault();
      formsContainer.classList.add("show-login");
  });

  showSignupFormLink.addEventListener("click", function (event) {
      event.preventDefault();
      formsContainer.classList.remove("show-login");
  });
});

// after the user successfully signs up, the login form will be automatically shown. This provides a seamless transition for users who have just registered.



