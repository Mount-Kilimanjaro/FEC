import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice(
  {
    name: "shoppingCart",
    initialState: {
      cart: [],
  },
    reducers: {
      addToCart: (state, {payload} ) => {
        let itemExist = false;
        const cpyCart = [...state.cart];
        for (let i = 0; i < cpyCart.length; i++) {
          const order = state.cart[i];
          if (order.sku === payload.sku && order.style_id === payload.style_id) {
            if (order.quantity + payload.quantity > order.maxQuantity ) {
              return alert("You have exeeced the quantity available ");
            }
            order.quantity += payload.quantity;
            itemExist = true;
            break;
          }
        }
        if(!itemExist) {
          cpyCart.push(payload);
        }
        state.cart = cpyCart;
      },
      removeFromCart: (state, {payload}) => {
        const cpyCart = [...state.cart];
        for (let i = 0; i < cpyCart.length; i++) {
          const order = state.cart[i];
          if (order.sku === payload.sku && order.style_id === payload.style_id) {
            cpyCart.splice(i,1)
            break
          }
        }
        state.cart = cpyCart;
      },
      modifyOrder: (state, {payload}) => {
        const cpyCart = [...state.cart];
        for (let i = 0; i < cpyCart.length; i++) {
          const order = state.cart[i];
          if (order.sku === payload.order.sku && order.style_id === payload.order.style_id) {
            order.quantity = payload.value;
            break;
          }
        }
        state.cart = cpyCart;
      }
    },
  },
);

export const {addToCart, removeFromCart, modifyOrder} = shoppingCartSlice.actions;
