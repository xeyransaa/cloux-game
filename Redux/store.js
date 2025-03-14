"use client";

import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/Cart/CartSlice";


const getCartItemsFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const cartItems = localStorage.getItem("cartItems");
      return cartItems ? JSON.parse(cartItems) : [];
    }
    return [];
  };

  const initialState = {
    cart: { cartItems: getCartItemsFromLocalStorage() },
    
  }; 

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
    preloadedState: initialState,
})

export default store;