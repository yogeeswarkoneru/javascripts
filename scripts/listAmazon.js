export let Cart;

loadfromeStorage();

export function loadfromeStorage() {
  Cart = JSON.parse(localStorage.getItem("Cart"));
  if (!Cart) {
    Cart = [
      {
        productId: "1",
        quantity: 2,
        deliveryOptionId: "3",
      },
      {
        productId: "2",
        quantity: 1,
        deliveryOptionId: "3",
      },
    ];
  }
}

export function addToCart(productId) {
  let matchingItem;

  Cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    Cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
  saveStorage();
}
export function removeFromCart(productId) {
  const newCart = [];

  Cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item);
    }
  });
  Cart = newCart;
  saveStorage();
}
function saveStorage() {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}
export function updatedeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  Cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveStorage();
  }
}
