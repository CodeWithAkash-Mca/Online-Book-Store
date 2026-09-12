const addressForm = document.getElementById("address-form");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (!cart.length) {
    alert("Your cart is empty. Add books before checkout.");
    window.location.href = "cart.html";
}

if (addressForm) {
    addressForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!addressForm.checkValidity()) {
            addressForm.reportValidity();
            return;
        }

        const formData = new FormData(addressForm);
        const address = Object.fromEntries(formData.entries());

        localStorage.setItem("shippingAddress", JSON.stringify(address));
        window.location.href = "payment.html";
    });
}
