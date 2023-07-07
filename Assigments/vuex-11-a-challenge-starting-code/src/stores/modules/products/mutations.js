export default {

  addProductToCart(state, payload) {
   /*  console.log("add Product")
    console.log(payload.id)
    console.log(payload.title) */
    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.productId === payload.id
    );
    console.log(productInCartIndex)
    if (productInCartIndex >= 0) {
      state.cart.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
        qty: 1,
      };
      state.cart.items.push(newItem);
    }
    state.cart.qty++;
    state.cart.total += payload.price;
    console.log(state.cart)
  },
  removeProductFromCart(state, payload) {
    console.log("remove ")
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.productId === payload.prodId
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  },

}

