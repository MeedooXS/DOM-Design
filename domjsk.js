// Get all the necessary elements
const quantityValueElements = document.querySelectorAll(".quantity-value");
const incrementButtons = document.querySelectorAll(".increment-button");
const decrementButtons = document.querySelectorAll(".decrement-button");
const likeButtons = document.querySelectorAll(".like-button");
const deleteButtons = document.querySelectorAll(".delete-button");
const totalPriceElement = document.getElementById("total-price");

// Update the quantity value and total price
function updateQuantityValue(element, increment) {
  const quantityValue = parseInt(element.textContent);
  const newQuantityValue = quantityValue + increment;

  if (newQuantityValue >= 0) {
    // Ensure the quantity is non-negative
    element.textContent = newQuantityValue;
    updateTotalPrice();
  }
}

// Update the total price based on quantity and deletions
function updateTotalPrice() {
  let totalPrice = 0;

  quantityValueElements.forEach(function (element, index) {
    const quantityValue = parseInt(element.textContent);
    totalPrice += quantityValue; // Use your own calculation logic here
  });

  totalPriceElement.textContent = "Total Price: $" + totalPrice;
}

// Attach event listeners to the buttons
incrementButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    updateQuantityValue(
      button.parentElement.querySelector(".quantity-value"),
      1
    );
  });
});

decrementButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    updateQuantityValue(
      button.parentElement.querySelector(".quantity-value"),
      -1
    );
  });
});

likeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("liked");
  });
});

deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const cartItem = button.parentElement;
    cartItem.parentNode.removeChild(cartItem);
    updateTotalPrice();
  });
});
