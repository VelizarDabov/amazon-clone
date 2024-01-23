import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../../slices/basketSlice";
import numberReducer from '../../slices/numbersSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    numbers:numberReducer,
    
  },
});