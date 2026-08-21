import { Cart, removeFromCart, updatedeliveryOption } from "../listAmazon.js";

import { products, getProduct } from "../products.js";

import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

import { deliveryOptions, getDeliveryOption } from "../deliveryDates.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary() {
  let cartSummaryHTML = "";

  Cart.forEach((item) => {
    const matchingProduct = products.find(
      (product) => product.id === item.productId,
    );

    const deliveryOption = getDeliveryOption(item.deliveryOptionId);

    const deliveryDate = dayjs()
      .add(deliveryOption.deliverydays, "day")
      .format("dddd, MMMM D, YYYY.");

    cartSummaryHTML += `
          <div class="cart-item-container js-cart-item-id-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${deliveryDate}
            </div>

            <div class="cart-item-details-grid">

              <img
                class="product-image"
                src="${matchingProduct.image}"
              >

              <div class="cart-item-details">

                <div class="product-name">
                  ${matchingProduct.name}
                </div>

                <div class="product-price">
                  $${(matchingProduct.costCents / 100).toFixed(2)}
                </div>

                <div class="product-quantity">
                  <span>
                    Quantity:
                    <span class="quantity-label">
                      ${item.quantity}
                    </span>
                  </span>

                  <span class="update-quantity-link link-primary">
                    Update
                  </span>

                  <span
                    class="delete-quantity-link link-primary js-delete-link"
                    data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>

              </div>

              <div class="delivery-options">

                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                ${deliveryOptionHTML(item, matchingProduct)}

              </div>

            </div>
          </div>
          
        `;
  });

  function deliveryOptionHTML(item, matchingProduct) {
    let html = "";

    deliveryOptions.forEach((option) => {
      const dateString = dayjs()
        .add(option.deliverydays, "day")
        .format("dddd, MMMM D, YYYY.");

      const isChecked = option.id === item.deliveryOptionId;

      html += `
            <div
              class="delivery-option"
              data-product-id="${matchingProduct.id}"
              data-delivery-option-id="${option.id}">

              <input
                type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}"
                ${isChecked ? "checked" : ""}
              >

              <div>
                <div class="delivery-option-date">
                  ${dateString} 
                </div>

                <div class="delivery-option-price">
                  $${(option.price / 100).toFixed(2)}-Shipping
                </div>
              </div>

            </div>
          `;
    });

    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  // Delete

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      removeFromCart(link.dataset.productId);
      location.reload();
    });
    renderPaymentSummary();
  });

  // Delivery Option

  document.querySelectorAll(".delivery-option").forEach((option) => {
    option.addEventListener("click", () => {
      const productId = option.dataset.productId;
      const deliveryOptionId = option.dataset.deliveryOptionId;

      updatedeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
