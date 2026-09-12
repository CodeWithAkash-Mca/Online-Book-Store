function getAllBooks() {
  return [...fiction, ...romance, ...biography, ...mystery];
}

function addToCart(bookId) {
  const loggedInUser = localStorage.getItem("loggedInUser");

  if (!loggedInUser) {
    alert("Please login first to add books to your cart.");
    window.location.href = "login.html";
    return;
  }

  const book = getAllBooks().find((item) => item.id === Number(bookId));

  if (!book) {
    alert("Book not found.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingBook = cart.find((item) => item.id === Number(bookId));

  if (existingBook) {
    existingBook.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  displayCart();
  alert("Book added to cart!");
}

function displayCart() {
  const container = document.getElementById("cart-container");

  if (!container) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
  } else {
    cart.forEach((book) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="cart-item-info">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Price: ₹${book.price}</p>
          <div class="quantity-controls">
            <button onclick="decreaseQuantity(${book.id})">-</button>
            <span>${book.quantity}</span>
            <button onclick="increaseQuantity(${book.id})">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${book.id})">Remove</button>
        </div>
      `;

      container.appendChild(cartItem);
    });
  }

  const totalElement = document.getElementById("cart-total");

  if (totalElement) {
    const total = cart.reduce((sum, book) => sum + book.price * book.quantity, 0);
    totalElement.innerHTML = `<h2>Total: ₹${total}</h2>`;
  }

  updateCartCount();
}

function increaseQuantity(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const book = cart.find((item) => item.id === Number(bookId));

  if (book) {
    book.quantity += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  displayCart();
}

function decreaseQuantity(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const book = cart.find((item) => item.id === Number(bookId));

  if (book) {
    book.quantity -= 1;

    if (book.quantity <= 0) {
      cart = cart.filter((item) => item.id !== Number(bookId));
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  displayCart();
}

function removeFromCart(bookId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((book) => book.id !== Number(bookId));
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function goToPayment() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart.length) {
    alert("Your cart is empty. Add books before checkout.");
    return;
  }

  window.location.href = "address.html";
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");

  if (!cartCount) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, book) => sum + book.quantity, 0);
  cartCount.innerText = count;
}

displayCart();