import { createSlice } from "@reduxjs/toolkit";
import { Products, totalProducts } from "../../Data/data";

const INITIAL_STATE = {
  products: Products,
  totalProducts: totalProducts,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducer: {
    getProducts: (state) => state,
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
