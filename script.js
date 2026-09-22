// =====================================
// DIGITAL INFO SHOPPING CART
// =====================================


// Cart storage
let cart = [];


// =====================================
// ADD PRODUCT TO CART
// =====================================

function addToCart(productName, price) {

    // Check if product already exists
    const existingProduct =
        cart.find(
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

    alert(
        productName +
        " added to cart!"
    );
}


// =====================================
// UPDATE CART
// =====================================

function updateCart() {

    updateCartCount();

    displayCart();

}


// =====================================
// UPDATE CART NUMBER
// =====================================

function updateCartCount() {

    const cartCountElement =
        document.getElementById(
            "cartCount"
        );


    let totalItems = 0;


    cart.forEach(
        item => {

            totalItems +=
                item.quantity;

        }
    );


    if (cartCountElement) {

        cartCountElement.textContent =
            totalItems;

    }

}


// =====================================
// DISPLAY CART ITEMS
// =====================================

function displayCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    const cartTotal =
        document.getElementById(
            "cartTotal"
        );


    if (!cartItems || !cartTotal) {
        return;
    }


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">' +
            'Your cart is empty.' +
            '</p>';

        cartTotal.textContent = "0";

        return;
    }


    let html = "";

    let total = 0;


    // Create cart items
    cart.forEach(
        (item, index) => {

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            html += `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <div class="cart-item-name">
                            ${item.name}
                        </div>

                        <div class="cart-item-price">
                            ₹${item.price.toLocaleString('en-IN')}
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

        }
    );


    cartItems.innerHTML = html;


    cartTotal.textContent =
        total.toLocaleString(
            "en-IN"
        );

}


// =====================================
// INCREASE QUANTITY
// =====================================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


// =====================================
// DECREASE QUANTITY
// =====================================

function decreaseQuantity(index) {

    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();

}


// =====================================
// REMOVE PRODUCT
// =====================================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// =====================================
// OPEN CART
// =====================================

function openCart() {

    const cartPopup =
        document.getElementById(
            "cartPopup"
        );


    cartPopup.style.display =
        "flex";


    displayCart();

}


// =====================================
// CLOSE CART
// =====================================

function closeCart() {

    const cartPopup =
        document.getElementById(
            "cartPopup"
        );


    cartPopup.style.display =
        "none";

}


// =====================================
// CHECKOUT
// =====================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    alert(
        "Checkout system will be added next!"
    );

}
