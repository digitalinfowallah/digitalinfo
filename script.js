// Digital Info Shopping Cart

let cart = [];
let cartCount = 0;

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    cartCount = cart.length;

    updateCart();

    alert(productName + " added to cart!");
}

function updateCart() {

    const cartElement = document.querySelector(".cart");

    if (cartElement) {
        cartElement.innerHTML = "🛒 Cart (" + cartCount + ")";
    }
}
