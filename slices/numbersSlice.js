import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state, action) => {
      const index = state.items.findIndex(
        (numberItem) => numberItem.productId === action.payload.productId
      );

      let newnumber = [...state.items];
      if (index >= 0) {
        //item exist remove it
        newnumber.splice(index, 1);
      } else {
        console.warn("Cant remove the product");
      }
      state.items = newnumber;
    },
  },
});

// export const { addTonumber, removeFromnumber } = numberSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.number.items;
export const selectTotal = (state) =>
  state.number.items.reduce(
    (total, item) => total + Number(item.productPrice),
    0
  );
export default numberSlice.reducer;
