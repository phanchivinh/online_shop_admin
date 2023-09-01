import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authRedux';
import productReducer from './productRedux'

export default configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer
  }
})
