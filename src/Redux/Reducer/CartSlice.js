import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "Cart",
  initialState: {
    item: [],
    total: 0,
  },
  reducers: {
    additem: (state, action) => {
      state.item = action.payload;
    },
    addTotal: (state, action) => {
      state.total = state.total + parseInt(action.payload.products.price);
    },
    remove: (state, action) => {
      const index = state.item.findIndex(
        (item) => item.id === action.payload.id
      );
      state.item.splice(index, 1);
    },
    subTotal: (state, action) => {
      state.total = state.total - parseInt(action.payload.price);
    },
  },
});

export const { additem, addTotal, remove, subTotal } = Cart.actions;

export default Cart.reducer;
