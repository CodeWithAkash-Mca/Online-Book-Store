function displayBooks(bookList) {

    const container = document.getElementById("book-container");

    container.innerHTML = "";

    bookList.forEach(book => {

        const bookCard = document.createElement("div");

        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
        
            <img src="${book.image}" alt="${book.title}">

            <h3>${book.title}</h3>

            <p>Author: ${book.author}</p>

            <p>₹${book.price}</p>

            <p>⭐ ${book.rating}</p>

            <button onclick="viewBook(${book.id})">
                View Details
            </button>

            <button onclick="addToCart(${book.id})">
                Add to Cart
            </button>

        `;

        container.appendChild(bookCard);

       
    });
}
function viewBook(id) {

    window.location.href = `book-details.html?id=${id}`;

}
