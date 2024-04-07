// Get all the necessary elements
const items = document.querySelectorAll('.item');
const totalPrice = document.getElementById('totalPrice');

// Add event listeners to each item
items.forEach(item => {
  const up = item.querySelector('.up');
  const down = item.querySelector('.down');
  const quantity = item.querySelector('.v');
  const price = item.querySelector('#prix');

  // Increase quantity when up button is clicked
  up.addEventListener('click', () => {
    quantity.textContent = parseInt(quantity.textContent) + 1;
    price.value = parseInt(price.value) + parseInt(price.value) / 100;
    updateTotalPrice();
  });

  // Decrease quantity when down button is clicked
  down.addEventListener('click', () => {
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = parseInt(quantity.textContent) - 1;
      price.value = parseInt(price.value) - parseInt(price.value) / 100;
      updateTotalPrice();
    }
  });
});

// Update the total price
function updateTotalPrice() {
  let total = 0;
  items.forEach(item => {
    const price = item.querySelector('#prix');
    const quantity = item.querySelector('.v');
    total += parseInt(price.value) * parseInt(quantity.textContent);
  });
  totalPrice.textContent = `Total : $${total.toFixed(2)}`;
}