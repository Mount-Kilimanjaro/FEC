import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice(
  {
    name: "shoppingCart",
    initialState: {
      cart: [],
  },
    reducers: {
      addToCart: (state, {payload} ) => {
        const {index, newOrder} = payload;
        const cpyCart = [...state.cart];
        if (index !==null) {
          cpyCart[index].quantity += newOrder.quantity;
        } else {
          cpyCart.push(newOrder);
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
