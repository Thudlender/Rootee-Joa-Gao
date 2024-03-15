// script.js

// Function to scroll to the products section
function scrollToProducts() {
  const productsSection = document.getElementById("products");
  productsSection.scrollIntoView({ behavior: "smooth" });
}
// script.js

// script.js

// Array to store items in the shopping cart
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price) {
  // Check if the product is already in the cart
  const existingItem = cartItems.find(item => item.name === productName);
  if (existingItem) {
      // If the product already exists, increase its quantity
      existingItem.quantity++;
  } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      cartItems.push({ name: productName, price: price, quantity: 1 });
  }
  updateCart();
}


// Function to remove a product from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Function to update the cart UI and total price
function updateCart() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Clear the previous content
  cartList.innerHTML = "";

  // Populate the cart with items
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("p");
    li.textContent = `${item.name}: price = ${item.price} x ${item.quantity} ฿\t`;

    // Create a remove button for each item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeFromCart(index);
    };
    li.appendChild(removeButton);
    cartList.appendChild(li);

    totalPrice += parseFloat(item.price) * item.quantity;
  });

  // Update the total price
  cartTotal.textContent = totalPrice.toFixed(2);
}
