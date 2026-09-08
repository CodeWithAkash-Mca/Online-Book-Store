// Get signup form
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Show message
    alert("Account created successfully!");

    // Go to login page
    window.location.href = "login.html";

});