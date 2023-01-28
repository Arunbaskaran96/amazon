import { createSlice } from "@reduxjs/toolkit";

export const Products = createSlice({
  name: "Product",
  initialState: {
    item: [],
  },
  reducers: {
    addproducts: (state, action) => {
      state.item = action.payload;
    },
  },
});
export const { addproducts } = Products.actions;
export default Products.reducer;
