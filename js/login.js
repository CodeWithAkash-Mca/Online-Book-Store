// Get login form
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get entered values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Get registered user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Check if user exists
    if (!user) {

        alert("No account found. Please sign up first.");

        return;
    }

    // Check email and password
    if (email === user.email && password === user.password) {

        // Store logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login successful!");

        // Go to home page
        window.location.href = "index.html";

    } else {

        alert("Invalid email or password.");

    }

});

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href = "index.html";

}