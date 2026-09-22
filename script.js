// Shopping cart
let cart = [];

// Add product to cart
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price
    };

    cart.push(product);

    updateCart();

    alert(productName + " added to cart!");
}

// Update cart count
function updateCart() {
    const cartElement = document.querySelector(".cart");

    cartElement.textContent = "🛒 Cart (" + cart.length + ")";
}
