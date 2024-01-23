import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number:0,
};

export const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    increment: state => {
      state.number += 1;
    },
    decrement: state => {
      if(state.number > 0){
        state.number -= 1;
      }

  
    },
  },
});

export const { increment, decrement } = numbersSlice.actions;

export default numbersSlice.reducer;
