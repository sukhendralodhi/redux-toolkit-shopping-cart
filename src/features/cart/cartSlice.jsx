import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../data/CartItem";

const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: ((state) => {
        state.cartItems = [];
    }),
  }
});

// console.log(cartSlice);
export const {clearCart} = cartSlice.actions;
export default cartSlice.reducer;
