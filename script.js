// =====================================================
// DIGITAL INFO - MAIN JAVASCRIPT
// =====================================================


// =====================================================
// SHOPPING CART
// =====================================================

let cart = [];


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(productName, price) {

    const existingProduct = cart.find(
        item => item.name === productName
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });

    }

    updateCart();

    alert(productName + " added to cart!");

}


// =====================================================
// UPDATE CART
// =====================================================

function updateCart() {

    updateCartCount();

    displayCart();

}


// =====================================================
// CART COUNT
// =====================================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

    });

    cartCount.textContent = totalItems;

}


// =====================================================
// DISPLAY CART
// =====================================================

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) {
        return;
    }


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    let html = "";

    let total = 0;


    cart.forEach((item, index) => {

        const itemTotal =
            item.price * item.quantity;

        total += itemTotal;


        html += `

            <div class="cart-item">

                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-price">
                        ₹${item.price.toLocaleString("en-IN")}
                    </div>

                </div>


                <div class="quantity-controls">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})">

                    Remove

                </button>

            </div>

        `;

    });


    cartItems.innerHTML = html;


    cartTotal.textContent =
        total.toLocaleString("en-IN");

}


// =====================================================
// INCREASE QUANTITY
// =====================================================

function increaseQuantity(index) {

    if (!cart[index]) {
        return;
    }

    cart[index].quantity++;

    updateCart();

}


// =====================================================
// DECREASE QUANTITY
// =====================================================

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(index) {

    if (!cart[index]) {
        return;
    }

    cart.splice(index, 1);

    updateCart();

}


// =====================================================
// OPEN CART
// =====================================================

function openCart() {

    const cartPopup =
        document.getElementById("cartPopup");

    if (!cartPopup) {
        return;
    }

    cartPopup.style.display = "flex";

    displayCart();

}


// =====================================================
// CLOSE CART
// =====================================================

function closeCart() {

    const cartPopup =
        document.getElementById("cartPopup");

    if (!cartPopup) {
        return;
    }

    cartPopup.style.display = "none";

}


// =====================================================
// CHECKOUT
// =====================================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    alert(
        "Checkout system will be added next!"
    );

}


// =====================================================
// PRODUCT SEARCH
// =====================================================

function searchProducts() {

    const searchInput =
        document.getElementById("productSearch");

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();


    const products =
        document.querySelectorAll(
            ".product-card-modern"
        );


    products.forEach(product => {

        const productName =
            product
            .querySelector("h3")
            ?.textContent
            .toLowerCase() || "";


        if (
            productName.includes(searchText)
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


// =====================================================
// HEADER SEARCH
// =====================================================

function headerSearchProducts() {

    const input =
        document.getElementById("headerSearch");

    const productSearch =
        document.getElementById("productSearch");


    if (!input) {
        return;
    }


    if (productSearch) {

        productSearch.value =
            input.value;

        searchProducts();

    }

}


// =====================================================
// FILTER PRODUCTS
// =====================================================

function filterProducts(category) {

    const products =
        document.querySelectorAll(
            ".product-card-modern"
        );


    products.forEach(product => {

        const productCategory =
            product.getAttribute(
                "data-category"
            );


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });


    const productsSection =
        document.getElementById("products");


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =====================================================
// PAGE READY
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCart();

    }
);
