// =========================
// ADD BOOK TO CART
// =========================

function addToCart(bookId) {

    // Check if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {

        alert("Please login first to add books to your cart.");

        window.location.href = "login.html";

        return;
    }


    // Combine all books
    const allBooks = [
        ...fiction,
        ...romance,
        ...biography,
        ...mystery
    ];

    // Find selected book
    const book = allBooks.find(book => book.id === bookId);

    // Get existing cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if book already exists
    const existingBook = cart.find(item => item.id === bookId);

    if (existingBook) {

        existingBook.quantity++;

    } else {

        cart.push({
            ...book,
            quantity: 1
        });

    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart count
    updateCartCount();

    alert("Book added to cart!");

}


// =========================
// DISPLAY CART
// =========================

function displayCart() {
  const container = document.getElementById("cart-container");

  if (!container) {
    return;
  }

  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Clear existing HTML
  container.innerHTML = "";

  // Display every cart item
  cart.forEach((book) => {
    const cartItem = document.createElement("div");

    cartItem.innerHTML = `

            <h2>${book.title}</h2>

            <p>Author: ${book.author}</p>

            <p>Price: ₹${book.price}</p>

            <img src="${book.image}" width="100">

            <div>

                <button onclick="decreaseQuantity(${book.id})">
                    -
                </button>

                <span>${book.quantity}</span>

                <button onclick="increaseQuantity(${book.id})">
                    +
                </button>

            </div>

            <button onclick="removeFromCart(${book.id})">
                Remove
            </button>

        `;

    container.appendChild(cartItem);
  });
  let total = 0;

  cart.forEach((book) => {
    total += book.price * book.quantity;
  });

  document.getElementById("cart-total").innerHTML = `
    <h2>Total: ₹${total}</h2>
`;
}

// =========================
// INCREASE QUANTITY
// =========================

function increaseQuantity(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const book = cart.find((book) => book.id === bookId);

  if (book) {
    book.quantity++;
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh cart display
  displayCart();
}


// =========================
// DECREASE QUANTITY
// =========================

function decreaseQuantity(bookId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const book = cart.find(book => book.id === bookId);

    if (book) {

        book.quantity--;

        // If quantity becomes 0, remove the book
        if (book.quantity <= 0) {

            cart = cart.filter(item => item.id !== bookId);

        }
    }

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh cart display
    displayCart();
}


// =========================
// REMOVE BOOK COMPLETELY
// =========================

function removeFromCart(bookId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove the selected book
    cart = cart.filter(book => book.id !== bookId);

    // Save updated cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh cart display
    displayCart();
}
//payment redirection
function goToPayment() {

    window.location.href = "payment.html";

}

// =========================
// DISPLAY CART WHEN PAGE LOADS
// =========================

function updateCartCount() {

    const cartCount = document.getElementBycl("cart-count");

    if (!cartCount) {
        return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(book => {

        count += book.quantity;

    });

    cartCount.innerText = count;
}
displayCart();