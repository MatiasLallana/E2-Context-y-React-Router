import { categories } from "../../Data/Categories";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: categories,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => state,
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
