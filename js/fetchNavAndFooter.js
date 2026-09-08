// =========================
// FETCH NAVBAR
// =========================

fetch("navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar").innerHTML = data;

        displayAuthLinks();

        updateCartCount();

    });

// =========================
// FETCH FOOTER
// =========================

fetch("footer.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("footer").innerHTML = data;

    });


// =========================
// DISPLAY AUTH LINKS
// =========================

function displayAuthLinks() {

    const authLinks = document.getElementById("auth-links");

    if (!authLinks) {
        return;
    }

    const loggedInUser = JSON.parse(
        localStorage.getItem("loggedInUser")
    );

    if (loggedInUser !== null) {

        authLinks.innerHTML = `
            <span>
                <i class="fa-solid fa-user"></i>
                Welcome, ${loggedInUser.name}
            </span>

            <button onclick="logout()">
                <i class="fa-solid fa-right-from-bracket"></i>
                Logout
            </button>
        `;

    } else {

        authLinks.innerHTML = `
            <a href="login.html">
                <i class="fa-solid fa-right-to-bracket"></i>
                Login
            </a>

            <a href="signup.html">
                <i class="fa-solid fa-user-plus"></i>
                Sign Up
            </a>
        `;

    }
}


// =========================
// LOGOUT
// =========================

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("You have been logged out.");

    window.location.href = "index.html";

}

