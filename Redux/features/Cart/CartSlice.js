import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      
        addToCart: (state, action) => {
          const existingGame = state.cartItems.find((g) => g.id == action.payload.id)
          if (existingGame) {
            existingGame.quantity += 1;
          } else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
          }
        
        },
        decreaseQuantity: (state, action) => {
          const existingGame = state.cartItems.find((g) => g.id == action.payload)
          if (existingGame && existingGame.quantity > 1) {
            existingGame.quantity --
          }
          
        },
        increaseQuantity: (state, action) => {
          const existingGame = state.cartItems.find((g) => g.id == action.payload)
          if (existingGame){
            existingGame.quantity ++

          }
            
          
          
        },
        removeFromCart: (state, action) => {
          
          
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            
          
          
        },
        clearCart: (state, action) => {
          state.cartItems = []
        }
       
      },
})

export const { addToCart, decreaseQuantity, increaseQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;