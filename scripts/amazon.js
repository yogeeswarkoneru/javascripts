import { products } from "../scripts/products.js";
import { Cart } from "../scripts/listAmazon.js";
import { removeFromCart } from "../scripts/listAmazon.js";

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-card">
      <div class="product-image-wrapper">
        <a href="">
          <img src="${product.image}" class="product" alt="${product.name}" />
        </a>
      </div>

      <div class="product-info">
       <p class="product-name">
        ${product.name}
      </p>
       
      </div>

      <div class="rating">
        <img
          src="${product.rating.stars}"
          alt="Star Icon"
          style="width: 100px; height: 24px"
        />
        ${product.rating.rated}
      </div>

      <div class="price">
        <span>$${(product.costCents / 100).toFixed(2)}</span>
      </div>

      <div>
        <select class="quantity-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="update-info"></div>

      <div class="product-controls" ">
        <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        <div class="amazon-qty-wrapper hidden">
        <button class="amazon-qty-btn minus-btn">−</button>
        <span class="amazon-qty-val">1</span>
        <button class="amazon-qty-btn plus-btn">+</button>
      </div>     
      </div>
    </div>
  `;
});
document.querySelector(".js-product-grid").innerHTML = productsHTML;

// Corrected and optimized code
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;

    // FIX 1: Use .find() instead of .forEach() for better performance
    let matchingItem = Cart.find((item) => productId === item.productid);

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      Cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    // FIX 2: Use .reduce() to cleanly calculate total quantity
    let cartQuantity = Cart.reduce((total, item) => total + item.quantity, 0);

    console.log(cartQuantity);
    console.log(Cart);

    // FIX 3: Corrected the missing quotes here
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
