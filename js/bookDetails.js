const urlParams = new URLSearchParams(window.location.search);

const bookId = Number(urlParams.get("id"));

console.log("Book ID:", bookId);


const allBooks = [
    ...fiction,
    ...romance,
    ...biography,
    ...mystery
];


const book = allBooks.find(book => book.id === bookId);

console.log("Selected Book:", book);
const container = document.getElementById("book-details");

container.innerHTML = `
    <img src="${book.image}" alt="${book.title}">

    <h2>${book.title}</h2>

    <p>Author: ${book.author}</p>

    <p>Genre: ${book.genre}</p>

    <p>Price: ₹${book.price}</p>

    <p>Rating: ⭐ ${book.rating}</p>

    <p>${book.description}</p>

    <button onclick="addToCart(${book.id})">
        Add to Cart
    </button>
`;