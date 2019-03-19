var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100 + 1)
  })
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var inCart = []
    for (let i = 0; i < cart.length; i++) {
      var normal = `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i === 0) {
        normal = `In your cart, you have ${normal}`
      } else if (cart.length > 1) {
        normal = `, and ${normal}`
      }
      if (i + 1 === cart.length) {
        normal = `${normal}.`
      }
      inCart.push(normal)

      // if (i === 0 && i+1 === cart.length) {
      //   inCart.push(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      // }
      // else if (i === 1 && i+1 === cart.length) {
      //   inCart.pop()
      //   inCart.push(`, and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      // }
      // else {
      //
      // }
    }
    return inCart
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
