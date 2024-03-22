import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalprice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const itemInCart = state.cart.find((pro) => pro.id === newItem.id);
      if (itemInCart) {
        itemInCart.totalAmount += 1;
        itemInCart.totalprice += newItem.price;

      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalprice: newItem.price,
        });
        state.totalAmount++;
      }
    },

    removeFromCart: (state, action) => {
      const deleteItem = state.cart.filter((pro) => pro.id !== action.payload);
      state.cart = deleteItem;
      state.totalAmount--;
    },
    increment: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity++;
      product.totalprice += product.price;
    },
    decrement: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );

      if (product.quantity > 1) {
        product.quantity--;
        product.totalprice -= product.price;
        console.log(product.totalPrice)
      } else {
        removeFromCart(product.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
