import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    //Get all
    getProductStart: (state) => {
      state.isFetching = true
      state.error = false
    },

    getProductSuccess: (state, action) => {
      state.isFetching = false
      state.products = action.payload
    },

    getProductFailure: (state, action) => {
      state.isFetching = false
      state.error = true
    },
  }
})
export const { getProductStart, getProductSuccess, getProductFailure } = productSlice.actions

export default productSlice.reducer
