import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Reducer/CartSlice";
import ProductSlice from "./Reducer/ProductSlice";

export default configureStore({
  reducer: {
    Products: ProductSlice,
    Cart: CartSlice,
  },
});
