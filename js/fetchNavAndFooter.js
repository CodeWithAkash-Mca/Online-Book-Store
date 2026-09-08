// =========================
// FETCH NAVBAR
// =========================

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (!cartCount) {
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, book) => sum + book.quantity, 0);
    cartCount.innerText = count;
}

const navbarElement = document.getElementById("navbar");

if (navbarElement) {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarElement.innerHTML = data;
            displayAuthLinks();
            updateCartCount();
        });
}

const footerElement = document.getElementById("footer");

if (footerElement) {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            footerElement.innerHTML = data;
        });
}


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

