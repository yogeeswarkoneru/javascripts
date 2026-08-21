import { Cart } from "../listAmazon.js";
import { getProduct } from "../products.js";
import { getDeliveryOption } from "../deliveryDates.js";
import { formatCurrency } from "../money.js";

export function renderPaymentSummary() {
  let totalCostCents = 0;
  let shippingCostCents = 0;

  Cart.forEach((item) => {
    const product = getProduct(item.productId);
    totalCostCents += product.costCents * item.quantity;

    const deliveryOption = getDeliveryOption(item.deliveryOptionId);

    shippingCostCents += deliveryOption.price;
  });

  // Keep everything in cents
  const totalCostBeforeTaxCents = totalCostCents + shippingCostCents;

  const taxCents = Math.round(totalCostBeforeTaxCents * 0.1);

  const totalCostCentsFinal = totalCostBeforeTaxCents + taxCents;

  let paymentSummary = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${Cart.length}):</div>
      <div class="payment-summary-money">
        ${formatCurrency(totalCostCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping & handling:</div>
      <div class="payment-summary-money">
        ${formatCurrency(shippingCostCents)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        ${formatCurrency(totalCostBeforeTaxCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
        ${formatCurrency(taxCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
        ${formatCurrency(totalCostCentsFinal)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div class="payment-summary-button">
      <a href="orders.html">
        <button class="place-order-button">
          Place your order
        </button>
      </a>
      </div>
    </div>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummary;
}
renderPaymentSummary();
