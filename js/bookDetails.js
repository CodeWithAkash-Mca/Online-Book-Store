const urlParams = new URLSearchParams(window.location.search);
const bookId = Number(urlParams.get("id"));
const container = document.getElementById("book-details");

if (!container) {
    throw new Error("Book details container not found.");
}

const allBooks = [...fiction, ...romance, ...biography, ...mystery];
const book = allBooks.find((item) => item.id === bookId);

if (!book) {
    container.innerHTML = "<p>Book not found.</p>";
} else {
    container.innerHTML = `
        <div class="book-detail-card">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-detail-info">
                <p class="eyebrow">${book.genre}</p>
                <h1>${book.title}</h1>
                <p>Author: ${book.author}</p>
                <p>Price: ₹${book.price}</p>
                <p>Rating: ⭐ ${book.rating}</p>
                <p>${book.description}</p>
                <button class="primary-btn" onclick="addToCart(${book.id})">Add to Cart</button>
            </div>
        </div>
    `;
}
