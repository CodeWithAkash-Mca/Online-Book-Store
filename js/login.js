const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (email === user.email && password === user.password) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    });
}

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href = "index.html";

}